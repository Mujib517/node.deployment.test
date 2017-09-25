var express = require('express');
var app = express();

var port = process.env.PORT | 3000;

app.listen(port, function () {
    console.log('running');
});

app.get('/', function (req, res) {
    res.send("Up");
});