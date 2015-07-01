// First thing we need to do is require express, and create an app
var express = require('express');
var app = express();
// Second create a variable to call the system Date which contain the days too.
var new_date = new Date();
// To show the days, we need to create an Array
var sel_days = new Array(7);
    sel_days[0] = 'Sunday';
    sel_days[1] = 'Monday';
    sel_days[2] = 'Tuesday';
    sel_days[3] = 'Wednesday';
    sel_days[4] = 'Thursday'
    sel_days[5] = 'Friday';
    sel_days[6] = 'Saturday';

//The getDay() method returns the day of the week (from 0 to 6) for the specified date.
var day = sel_days[new_date.getDay()] ;

// A middleware with no mount path; gets executed for every request to the app
app.use(function (req, res) {
  //Send request to the server
  res.send('Time:', day);
});

// Start the server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
