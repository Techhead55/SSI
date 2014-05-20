function debug(msg){
    var colour = require('cli-color');
    console.log((colour.xterm(45))("SSI: ")+msg);
}
debug("The server is starting.")
var express = require('express'),
	app = express(),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server, {log:false}),
    data = {},
    dbController = require('nstore'),
    database = dbController.new('data.db',function(){
        database.get("data", function(e,d,k){
            data = d;
            debug(e?"There was an error loading the database.":"The database had been loaded.")
        });
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
    debug("The interface has connected.")
    socket.on('requestdata', function(v){
        debug("The interface requested data.");
        socket.emit('data', data);
    });
    socket.on('disconnect', function() {
        debug("The interface has disconnected.")
    });
});