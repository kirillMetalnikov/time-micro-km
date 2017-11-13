// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:time", function (req, res) {
  if (/^\d+$/.test(req.params.time)) {
     var result = new Date (+req.params.time * 1000);
  } else {
    result = new Date (req.params.time);
  }
  res.write(req.params.time + "\n")
  res.write(result + "\n")
  res.end(JSON.stringify({natural: result ,unixtime: result.valueOf() / 1000}));
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
