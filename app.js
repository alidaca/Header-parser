var express = require('express'),
    accepts = require('accepts');
    useragent = require('express-useragent');

var app = express();

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('Listening on port ' + port);
});

app.use(useragent.express());

app.get('/', function(req,res){

  var UserInfo = {ipAddress: "", language: "", software: ""};

  UserInfo.ipAddress = req.connection.remoteAddress;
  var accept = accepts(req);
  UserInfo.language = accept.language()[0];
  UserInfo.software= req.useragent.os;

  res.json(UserInfo);
});
