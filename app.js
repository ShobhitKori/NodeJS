const mod = require('./module')
console.log(mod)
mod(3,7)

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('eventname',(arg1, arg2)=>{
    console.log("Event occurred sum is: ",arg1+arg2);
})

eventEmitter.emit('eventname', 5,10);

// const EventEmitter /*CLASS*/  = require('events');
// const eventEmitter /*Obj*/    = new EventEmitter();


// eventEmitter.on('name',(name)=>{
//     console.log("Hello there",name);
// })
// eventEmitter.emit('name','bro!');

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
// }

// let p1 = new Person('Ed');
// p1.on('name',()=>{
//     console.log("My name is", p1.name);
// })
// p1.emit('name');



// const { exit } = require('process');
// const readline = require('readline');
// const rl = readline.Interface({input : process.stdin,
//                               output : process.stdout});

// let num1 = Math.floor((Math.random()*10)+1);
// let num2 = Math.floor((Math.random()*10)+1);
// let ans  = num1 + num2;
// rl.question('What is '+num1+' + '+num2+' ?\n', (usrin)=>{
//     console.log(ans == usrin.trim());
//     rl.close();
// });