window.onload = function(){
    var socket = io.connect('http://localhost:3780'),
        data = {},
        databaseElement = document.getElementById("database");
    function addEle (contents, level, id){
        var element = document.createElement("div"),
            input = document.createElement("input");
        input.setAttribute("value", contents);
        input.setAttribute("class", "databaseElementInput");
        input.onchange = function(){
            console.log("data"+id.replace(".", "['").replace(/\./g,"']['")+"'] = '"+input.value+"';");
            eval("data"+id.replace(".", "['").replace(/\./g,"']['")+"'] = '"+input.value+"';");
        };
        element.appendChild(input)
        element.style.paddingLeft = (((level)*30)+30)+"px";
        element.setAttribute("class", "databaseElement");
        element.setAttribute("id", id);
        databaseElement.appendChild(element);
    }
    function process(object, level, last){
        if (object instanceof Object){
            for (item in object) {
                addEle(item+":", level,last+"."+item);
                process(object[item], level+1, last+"."+item);
            }
        } else {
            addEle(object, level, last);
        }
    }
    socket.on('connect', function(){
        socket.emit('requestdata');
        socket.on('data', function(value){
            data = value;
            process(data, 0, "");
            window.data = data;
        });
    });
};