var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static('public'));

app.post("/callDate",function(req, res){
  var selDate =  req.body.selectDate;
  res.send(selDate);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
