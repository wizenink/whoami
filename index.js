var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/',function(req,res){
    var response = {
        "ipaddress":req.socket.address().address
        ,"language":req.get("Accept-Language")
        ,"software":req.get("User-Agent").match(/\((.+)\)/)[1]
    }
    res.send(response);
});
app.listen(port,function(){
    console.log('App listening on port ' + port);
});
