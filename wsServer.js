/**
 * Created by Cycle on 2017/11/15.
 */
var ws = require("nodejs-websocket")

var port = 8081;
var clientCount = 0;
var server = ws.createServer(function(conn){
    console.log("New connection")
    clientCount++;
    conn.nickname='user'+clientCount;
    var mes={};
    mes.type="enter"
    mes.data=conn.nickname+' come in'
    broadcast(JSON.stringify(mes))
    conn.on("text", function (str) {
        console.log("Received"+str)
        var mes={};
        mes.type="message"
        mes.data=conn.nickname+' says:'+str;
        broadcast(JSON.stringify(mes))
    })
    conn.on("close", function (code,reason) {
        var mes={};
        mes.type="leave"
        mes.data=conn.nickname+' left'
        broadcast(JSON.stringify(mes))
        console.log("connection closed")
    })
}).listen(port)
function broadcast(str){
    server.connections.forEach(function(connection){
        connection.sendText(str)
    })
}
console.log("connected")