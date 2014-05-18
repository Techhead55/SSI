console.log("SSI: Server is starting.")
var express = require('express'),
	app = express(),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server),
    dbController = require('nstore'),
    database = dbController.new('data.db',function(){
        console.log("SSI: Database loaded.");
    });
server.listen(3780);
app.get('/', function(req, res){
	res.sendfile(__dirname + '/interface/index.html');
});
app.get('/javascript', function(req, res){
	res.sendfile(__dirname + '/interface/main.js');
});
app.get('/stylesheet', function(req, res){
	res.sendfile(__dirname + '/interface/stylesheet.css');
});
io.sockets.on('connection', function(socket){
    console.log("SSI: Interface is connected.")
    socket.on('pushdata', function(data){
        console.log(data);
    });
});