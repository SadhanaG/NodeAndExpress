Node and Express
----------------

#### Get system Date into your program using express()

>First you need to call the express()

```javascript

var express = require('express');
var app = express();

```

>Second variable for new Date()

```javascript

var new_date = new Date();

```

>Third create an array for days

```javascript

var sel_days = new Array(7);
    sel_days[0] = 'Sunday';
    ...
    sel_days[6] = 'Saturday';

//The getDay() method returns the day of the week (from 0 to 6) for the specified date.
var day = sel_days[new_date.getDay()] ;

```

>Forth send request to the server

```javascript

app.use(function (req, res) {
  res.send('Time:', day);
});

```

>At the end, Start the server

```javascript

var server = app.listen(3000, function () {
  ...
  console.log('Example app listening at http://%s:%s', host, port);

});

```
