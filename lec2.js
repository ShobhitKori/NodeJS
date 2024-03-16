// const fs = require('fs');
// const text = fs.readFileSync('demo.txt','utf-8');
// console.log(text);
// //Synchronous method
// let content = 'This content is going to be written in output file ${text}. \nDate Created: ${new Date}';
// fs.writeFileSync('output.txt', content);

// Synchronous method is used when the series of commands are to be executed in the sequence of how they are written


// fs.readFile('input.txt', 'utf-8', (error1, data1)=>{    //executed later
//     console.log(error1);
//     console.log(data1);
// });
// console.log("reading files...");        //executed first

// // Aynchronous method is used when the series of commands are not required to be executed in the sequence of how they are written
// //i.e. the time consuming commands are executed later

const http = require('http');
const fs = require('fs');
const path = require('path');
// 1. Create a server
console.log(__dirname);
const server = http.createServer((request, response)=>{
    if (request.url === '/') {
        const htmlPath = path.join(__dirname, 'index.html');
        console.log("request is received html");
        // const htmlPath = path.join(__dirname, 'Template', 'index.html');
        // const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
        const htmlContent = fs.readFile('./Template/index.html', 'utf-8', (err, data)=>{
            if(err) {
                response.writeHead(500, { 'Content-Type' : 'text/plain'});
                response.end('Internal Server Error');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html'});
                response.end(data)
            }
        });
    }
    else if (request.url === '/style.css') {
        console.log("request is received css");
        // const cssPath = path.join('./style.css', 'Template', 'style.css');
        // const cssContent = fs.readFileSync('./Template/style.css', 'utf-8');
        const stylesPath = path.join(__dirname, 'style.css');
        const cssContent = fs.readFile('./Template/style.css', 'utf-8', (err, data)=>{
            if(err) {
                response.writeHead(200, { 'Content-Type': 'text/css' });
                response.end('Internal Server Error');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/css' });
                response.end(data);
            }
        });
    }
    else if (request.url.startsWith('/img/')) {
        const imagePath = path.join('Template', request.url);
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Not Found');
            } else {
                // Determine the content type based on the file extension
                const extension = path.extname(imagePath).toLowerCase();
                const contentType = {
                    '.jpg': 'image/jpeg',
                    '.jpeg': 'image/jpeg',
                    '.png': 'image/png',
                    '.gif': 'image/gif',
                    '.bmp': 'image/bmp'
                    // Add more as needed
                }[extension] || 'application/octet-stream';

                response.writeHead(200, { 'Content-Type': contentType });
                response.end(data);
            }
        });
    }
    // Handle other requests (404 Not Found)
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found');
    }
});


//2. Start the server
const PORT = 8000;
server.listen(PORT,'127.0.0.1',()=>{
    console.log("Server has started");
});