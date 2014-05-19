console.log("SSI: Server is starting.")
var express = require('express'),
	app = express(),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server),
    data = {},
    dbController = require('nstore'),
    database = dbController.new('data.db',function(){
        database.get("data", function(e,d,k){
            data = d;
        })
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
app.get('/helvetica', function(req, res){
	res.sendfile(__dirname + '/interface/helvetica.css');
});
app.get('/helvetica.woff', function(req, res){
	res.sendfile(__dirname + '/interface/helvetica.woff');
});
io.sockets.on('connection', function(socket){
    console.log("SSI: Interface has connected.")
    socket.on('requestdata', function(v){
        console.log("SSI: Interface has request data");
        socket.emit('data', data);
    });
    socket.on('disconnect', function() {
        console.log("SSI: Interface has disconnected.")
    });
});