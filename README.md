Node and Express
----------------

#### Get system Date into your program using express()

>First you need to call the express()

```javascript

var express = require('express');
var app = express();

```

> Second you need to send a request for new Date()

```javascript

var ndate = new Date();

app.use(function (req, res, next) {
  res.send('Time:', ndate.toDateString());
  next();
});

```
>> Third call the server

```javascript

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

```
