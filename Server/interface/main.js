var socket = io.connect('http://localhost:3780'),
    data = {};
socket.on('connect', function(){
    socket.emit('requestdata');
    socket.on('data', function(value){
        data = value;
    });
});