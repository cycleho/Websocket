/**
 * Created by Cycle on 2017/11/13.
 */
var express = require('express');
var express = require('module');
var app =express();

app.get('/',function(req,res){
    res.send('hello world');
})

var server =app.listen(8081,function(){
    var host = server.address().address
    var port = server.address.port

    console.log("应用实例，访问地址为http://%s:%s",host,port)
});
