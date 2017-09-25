// var express = require('express');
// var app = express();


var http = require("http");

function handelRequest(req, res) {
    res.write("Up");
    res.end();
}

var server = http.createServer(handelRequest);

var port = process.env.PORT | 3000;

server.listen(port, function () {
    console.log("running...");
});


// app.listen(port, function () {
//     console.log('running');
// });

// app.get('/', function (req, res) {
//     res.send("Up");
// });