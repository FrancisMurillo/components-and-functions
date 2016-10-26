/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);


let userServerPort = null;


var serverPort = 33000; // HACK: Change port

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));


// Add static path
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'extra')))

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, "localhost", function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Listening at http://localhost:" + serverPort);
});
