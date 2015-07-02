// First thing we need to do is require express, and create an app
var express = require('express');
var app = express();
// Required extra middleware layer as a body-parser to handle the POST request
var bodyParser = require('body-parser');
//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded());

//express.static is start serving the files directly from the directory name public
app.use(express.static('public'));

//POST the request to server and get the response
app.post("/callDate",function(req, res){
  var selDate =  req.body.selectDate;
  res.send(selDate);
});

//Start the server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
