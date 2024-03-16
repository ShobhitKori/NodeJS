// const fs = require('fs');
// const http = require('http');
// const server = http.createServer();
// server.on('request', (req, res)=> {
//     const rstream = fs.createReadStream('demo.txt');
//     rstream.on('data', (chunkdata)=> {
//         res.write(chunkdata);
//     });
//     rstream.on('end', ()=> {
//         res.end();
//     });
//     rstream.on('error', (err)=> {
//         console.log(err);
//         res.end('File not found');
//     });
// });

// server.listen(8000, '127.0.0.1', ()=> {
//     console.log('Server has started');
// });

// stream.pipe() method is used to take readable stream and connect it to writable stream.


// const fs = require('fs');
// const http = require('http');
// const server = http.createServer();
// server.on('request', (req, res)=> {
//     const rstream = fs.createReadStream('demo.txt');
//         rstream.pipe(res);
// });

// server.listen(8000, '127.0.0.1', ()=> {
//     console.log('Server has started');
// });

//Timers
// setTimeout(()=>{
//     console.log('Hello after two seconds');
// }, 2000);
// console.log('Hello now');


// setImmediate(()=>{
//     console.log('Hello from setImmediate');
// });
// console.log('Hello');


// NPM
// npm install chalk

// const chalk = require('chalk');
// console.log(chalk.red.underline('Follow @shobhitcodes on Twitter'));

// const validator = require('validator');
// const isValid = validator.isEmail('shobhitsthetics@gym.com')
// console.log(isValid?chalk.green.inverse(isValid) : chalk.red.inverse(isValid));


const http = require('http');
const fs = require('fs')
const html = fs.readFileSync('./Template/indexx.html', 'utf-8');

//converting json data into javascript object
const jsonData = fs.readFileSync('empData.json', 'utf-8');
let data = JSON.parse(jsonData);


const server = http.createServer((request, response)=>{
    let path = request.url;
    
    if(path.toLocaleLowerCase() == '/' ||path.toLocaleLowerCase() == '/home') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%abc%}}', 'You are in  Home page.'));
    }
    else if(path.toLocaleLowerCase() == '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%abc%}}', 'You are in Contact page'));
    }
    else if(path.toLocaleLowerCase() == '/products') {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        fs.readFile('empData.json', 'utf-8', (err, data)=>{
            if(err) {
                response.writeHead(500, { 'Content-Type' : 'text/plain'});
                response.end('Internal Server Error');
            } else {
                response.end(data);
            }
        });
    }
    else if(path.toLocaleLowerCase() == '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%abc%}}', 'You are in About page'));
        
    }
    else {
        response.writeHead(404);
        response.end('404 Error page not found');
    }
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Server is started');
});




// const fs = require('fs');
// const data = fs.readFileSync('empData.json');
// const convertedData = JSON.parse(data);
// console.log(convertedData);