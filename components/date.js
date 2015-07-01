
var express = require('express');
var app = express();
var ndate = new Date();

var ndate = new Date();
var ndays = new Array(7);
    ndays[0] = 'Sunday';
    ndays[1] = 'Monday';
    ndays[2] = 'Tuesday';
    ndays[3] = 'Wednesday';
    ndays[4] = 'Thursday'
    ndays[5] = 'Friday';
    ndays[6] = 'Saturday';
var d = ndays[ndate.getDay()] ;

app.use(function (req, res, next) {
  res.send('Time:', d);
  next();
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
