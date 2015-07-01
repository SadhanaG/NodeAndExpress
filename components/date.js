var express = require('express');
var app = express();
var ndate = new Date();

app.use(function (req, res, next) {
  res.send('Time:', ndate.toDateString());
  next();
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
