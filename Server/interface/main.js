window.onload = function(){
    var socket = io.connect('http://localhost:3780'),
        data = {},
        databaseElement = document.getElementById("database");
    function addEle (contents, level){
        var element = document.createElement("div");
        element.style.paddingLeft = (((level)*30)+30)+"px";
        element.innerHTML = contents;
        element.setAttribute("class", "databaseElement");
        databaseElement.appendChild(element);
    }
    function process(object, level){
        if (object instanceof Object){
            for (item in object) {
                addEle(item+":", level);
                process(object[item], level+1);
            }
        } else {
            addEle(object, level);
        }
    }
    socket.on('connect', function(){
        socket.emit('requestdata');
        socket.on('data', function(value){
            data = value;
            process(data, 0);
        });
    });
};