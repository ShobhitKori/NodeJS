const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('./Template/index.html','utf-8');
// converting JSON data to Java Script Object
let products = JSON.parse(fs.readFileSync('./Data/product.json','utf-8'));
let productlistHTML = fs.readFileSync('./Template/product-list.html','utf-8');
let productHTMLArray = products.map((prod)=>{
    let output = productlistHTML.replace('{{%IMAGE%}}',prod.productImage);
    output = output.replace('{{%NAME%}}',prod.name);
    output = output.replace('{{%MODELNAME%}}',prod.modeName);
    output = output.replace('{{%MODELNO%}}',prod.modelNumber);
    output = output.replace('{{%SIZE%}}',prod.size);
    output = output.replace('{{%CAMERA%}}',prod.camera);
    output = output.replace('{{%PRICE%}}',prod.price);
    output = output.replace('{{%COLOR%}}',prod.color);
    return output;
});
const server = http.createServer((request,response)=>{
    let path = request.url;
    
    if(path.toLocaleLowerCase()=='/' || path.toLocaleLowerCase()=='/home'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(html.replace('{{%abc%}}','You are in Home page'));
    }else  if(path.toLocaleLowerCase()=='/about'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(html.replace('{{%abc%}}','You are in About Page'));
    }else  if(path.toLocaleLowerCase()=='/contact'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(html.replace('{{%abc%}}','You are in Contact Page'));
    }else  if(path.toLocaleLowerCase()=='/products'){
        let productResponseHTML = html.replace('{{%abc%}}',productHTMLArray.join(','));
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(productResponseHTML);
        
    }else{
        response.writeHead(404);
        response.end("Error 404: Page Not Found")
    }
});
// 2. start the server
server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has started');
});