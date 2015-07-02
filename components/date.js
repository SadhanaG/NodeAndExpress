// First thing we need to do is require express, and create an app
var express = require('express');
var app = express();
// Second create a variable to call the system Date which contain the days too.
var currentDate = new Date();
// To show the days, we need to create an Array
var daysOfTheWeek = new Array(7);
    daysOfTheWeek[0] = 'Sunday';
    daysOfTheWeek[1] = 'Monday';
    daysOfTheWeek[2] = 'Tuesday';
    daysOfTheWeek[3] = 'Wednesday';
    daysOfTheWeek[4] = 'Thursday'
    daysOfTheWeek[5] = 'Friday';
    daysOfTheWeek[6] = 'Saturday';

//The getDay() method returns the day of the week (from 0 to 6) for the specified date.
var day = daysOfTheWeek[currentDate.getDay()] ;

//Send request to the server
app.use(function (req, res) {
  res.send('Time:', day);
});

// Start the server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
