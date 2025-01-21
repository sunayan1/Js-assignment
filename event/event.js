// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('myEvent', ()=>{
//     console.log("myEvent running...");
// });

// myEmitter.on('myEvent1', (msg) =>{
//     console.log("myEvent1 running...");
//     console.log(msg);
// } )

// myEmitter.emit('myEvent');
// myEmitter.emit('myEvent1', "dflkjsldf");

//in this instead of import, u should use require cus we havent updated package.json
import {EventEmitter} from 'events';
const myEmitter= new EventEmitter();

myEmitter.on('event1', (data) =>{
    console.log("Event1 is running...");
    console.log(data);
});

myEmitter.on('event2', (data)=>{
    
    console.log(data, '\n -Event2 is running');
})

myEmitter.emit('event1','hi hru');
myEmitter.emit('event2', 'Im fine hru');