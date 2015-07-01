// First thing we need to do is require express, and create an app
var express = require('express');
var app = express();
// Second create a variable to call the system Date which contain the days too.
var ndate = new Date();
// To show the days, we need to create an Array
var ndays = new Array(7);
    ndays[0] = 'Sunday';
    ndays[1] = 'Monday';
    ndays[2] = 'Tuesday';
    ndays[3] = 'Wednesday';
    ndays[4] = 'Thursday'
    ndays[5] = 'Friday';
    ndays[6] = 'Saturday';
var d = ndays[ndate.getDay()] ;

// A middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
  res.send('Time:', d);
  next();
});

//Send the HTTP request 
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
