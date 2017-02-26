var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.enable('trust proxy');

app.get('/',function(req,res){
    var response = {
        "ipaddress":req.ip
        ,"language":req.get("Accept-Language").match(/(.+),.*/)[1]
        ,"software":req.get("User-Agent").match(/\((.+)\)/)[1]
    }
    res.send(response);
});
app.listen(port,function(){
    console.log('App listening on port ' + port);
});
