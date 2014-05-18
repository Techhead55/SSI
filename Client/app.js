var express = require('express'),
	app = express(),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server);
server.listen(3780);
app.get('/', function(req, res){
	res.sendfile(__dirname + '/interface.html');
});
io.sockets.on('connection', function(socket){
    console.log("client connected")
    socket.on('change', function(data){
        console.log(data);
    });
});