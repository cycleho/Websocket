/**
 * Created by Cycle on 2017/11/14.
 */
var events = require("events");
var e= new events.EventEmitter();

e.on('someFunction',function(){
    console.log('someFunction执行')
})
e.emit('someFunction')