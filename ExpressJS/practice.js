//Import package 
const express = require('express');
let app = express();
const fs= require('fs');
app.use(express.json());
let movies=JSON.parse(fs.readFileSync('./data/movies.json'));
//Route = HTTP method + Url
//Get - /api/v1/movies
app.get('/api/v1/movies',(req,res)=>{
    res.status(200).json({
        status:"ShowTime",
        count:movies.length,
        data:{
            movies:movies
        }
    });
});

app.post('/api/v1/movies',(req,res)=>{
    const newID = movies[movies.length-1].id+1;
    const newMovie = Object.assign({id:newID},req.body);
    movies.push(newMovie);
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(201).json({
            status:"Blockbluster",
            data:{ 
                movies:newMovie
            }
        });
    });
});
// create a server
const port = 3000;
app.listen(port,()=>{
    console.log('Server Started....!');
});