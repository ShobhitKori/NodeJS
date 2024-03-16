// console.log("Hello, World!");
// const a = 10;
// const b = 20;
// c = a+b;
// let d = "pee pee!"
// console.log(c);
// console.log(d);
// console.warn(a);



// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("What is your name? ",(name)=>{  //callback Function
//     console.log("You entered " + name);
//     rl.close();
// })


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ",(num1)=>{
    rl.question("Enter second number: ",(num2)=>{
        const sum = parseInt(num1) + parseInt(num2);
        console.log("The sum of ${num1} and ${num2} is ${sum}");
    });
    rl.close();
});

rl.on('close',()=>{
    console.log("Interface Closed!");
    process.exit(0);
})


// const http = require('http');
// // create server
// const server = http.createServer((request, response)=>{
//     response.end("Hello from the Server :)");
//     console.log("A server is created");
// });
// //start server
// server.listen(8000,'127.0.0.1',()=>{
//     console.log("Server has started");
// });