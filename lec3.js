// const http = require('http');
// const fs = require('fs');
// const { resolvePtr } = require('dns');
// const html = fs.readFileSync('./Template/indexx.html', 'utf-8');
// const server = http.createServer((request, response) => {
//     let path = request.url;
//     if(request.url.toLocaleLowerCase() == '/' || request.url.toLocaleLowerCase() == '/home'){
//         response.writeHead(200);
//         response.end(html.replace('{{%abc%}}', 'You are in home page'));
//     }
//     else if(request.url.toLocaleLowerCase() == '/about'){
//         response.writeHead(200);
//         response.end(html.replace('{{%abc%}}', 'You are in about page'));
//     }
//     else if(request.url.toLocaleLowerCase() == '/contact'){
//         response.writeHead(200);
//         response.end(html.replace('{{%abc%}}', 'You are in contact page'));
//     }
//     else if(request.url.toLocaleLowerCase() == '/products'){
//         response.writeHead(200);
//         response.end(html.replace('{{%abc%}}', 'You are in products page'));
//     }
//     else {
//         response.writeHead(404);
//         response.end('404 ERROR PAGE NOT FOUND!');
//     }
//     response.end(html);

// });
// server.listen(8000, '127.0.0.1', ()=>{
//     console.log("Server has started");
// });


//os module

// const os = require('os');
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.freemem());
// const freemem = os.freemem();
// console.log(`${freemem/1024/1024/1024}`);
// const totalmem = os.totalmem();
// console.log(`${totalmem/1024/1024/1024}`);
// console.log(os.loadavg());


// Event Emitters
// Node.js has a built in module called 'events' where you can create, fire and listen - your own events.
// 1. Regestering the event to br fired only one time.
// 2. Create an event emitter instance and register a couple of callbacks
// 3. Registering event  with callback parameter

const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sayMyName', ()=>{
    console.log('MYNAME');
})
event.emit('sayMyName');

event.on('checkPage', (statusCode, msg)=>{
    console.log(`The status code is ${statusCode} and the page is ${msg}`);
});
event.emit('checkPage', 200, 'OK');