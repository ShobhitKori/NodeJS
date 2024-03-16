// // nodejson.js

// const http = require('http');
// const fs = require('fs')
// const html = fs.readFileSync('./Template/indexx.html', 'utf-8');

// //converting json data into javascript object

// const server = http.createServer((request, response)=>{
//     let path = request.url;
    
//     if(path.toLocaleLowerCase() == '/' ||path.toLocaleLowerCase() == '/home') {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.end(html.replace('{{%abc%}}', 'You are in  Home page.'));
//     }
//     else if(path.toLocaleLowerCase() == '/contact') {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.end(html.replace('{{%abc%}}', 'You are in Contact page'));
//     }
//     else if(path.toLocaleLowerCase() == '/products') {
//         response.writeHead(200, { 'Content-Type': 'text/html' });

//         fs.readFile('./Template/data/products.json', 'utf-8', (err, data)=>{
//             if(err) {
//                 response.writeHead(500, { 'Content-Type' : 'text/plain'});
//                 response.end('Internal Server Error');
//             } else {
//                 let productresponsehtml = html.replace("{{%abc%}}", prodcutsshtmlArray);
//                 response.end(productresponsehtml);
//             }
//         });
//     }
//     else if(path.toLocaleLowerCase() == '/about') {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.end(html.replace('{{%abc%}}', 'You are in About page'));
        
//     }
//     else {
//         response.writeHead(404);
//         response.end('404 Error page not found');
//     }
// });

// server.listen(8000, '127.0.0.1', ()=>{
//     console.log('Server is started');
// });






const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('./Template/indexx.html', 'utf-8');

// //converting json data into javascript object
const productData=fs.readFileSync('./Template/data/products.json','utf-8');
let products =JSON.parse(productData);
const producthtml=fs.readFileSync('product-list.html','utf-8');


//1. create a server 
const server = http.createServer((req, response) => {
    const path = req.url;
    if (path.toLocaleLowerCase() == '/' || path.toLocaleLowerCase() == '/home') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        //replace(placeholdeer,value)
        response.end(html.replace('{{%abc%}}', 'You are in Home page.'));
    }
    else if (path.toLocaleLowerCase() == '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        //replace(placeholdeer,value)
        response.end(html.replace('{{%abc%}}', 'You are in about page.'));
    }
    else if (path.toLocaleLowerCase() == '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        //replace(placeholdeer,value)
        response.end(html.replace('{{%abc%}}', 'You are in contact page.'));
    }
    else if (path.toLocaleLowerCase() == '/products') {
        //'Content-Type': 'application/json' will format file in json format;
        
        // response.writeHead(200, { 'Content-Type': 'text/html' });
       
        // //read json file 
        // fs.readFile('./data/products.json','utf-8',(error,data1)=>{
        //     response.end(producthtml);
        //     console.log(products);
           
        // });

        response.writeHead(200, { 'Content-Type': 'text/html' });

        fs.readFile('./Template/data/products.json', 'utf-8', (err, data)=>{
            if(err) {
                response.writeHead(500, { 'Content-Type' : 'text/plain'});
                response.end('Internal Server Error');
            } else {
                let productresponsehtml = html.replace("{{%abc%}}", prodcutsshtmlArray);
                response.end(productresponsehtml);
            }
        });
    }

    else {
        response.writeHead(404);
        response.end('Error 404: Page not Found');
    }
});
//2. Start a server
server.listen(8000, '127.0.0.2', () => {
    console.log("Server has started");
});