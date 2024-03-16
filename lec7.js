const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

// app.get('/', function(req, res) {
//     res.json({title: 'hello world'});
// })
let movies = JSON.parse(fs.readFileSync('ExpressJS/movies.json'));

// app.get('/api/v1/movies', (req, res)=>{
//     res.status(200).json({movies});
// });

// app.post('/api/v1/movies', (req, res) => {
//     const newID = movies[movies.length - 1].id+1;
//     const newMovie = Object.assign({id: newID}, req.body);
//     movies.push(newMovie);
//     fs.writeFile('movies.json', JSON.stringify(movies), (err) =>{
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 movies: newMovie
//             }
//         });
//     });
// });

app.get('/api/v1/movies/:id', (req, res) => {
    const id = req.params.id*1; // string to int conversion
    // find movie based on id parameter
    let movie = movies.find(eL => eL.id == id)
    if(!movie) {
        res.status(404).json({
            status: 'Fail',
            message: 'Movie with id: '+id+' not found'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            movie: movie
        }
    });
});

app.patch('/api/v1/movies/:id', (req, res) =>{
    let id = req.params.id*1;
    let moviesToUpdate = movies.find(eL => eL.id == id);
    let index = movies.indexOf(moviesToUpdate);
    Object.assign(moviesToUpdate, req.body);
    movies[index] = moviesToUpdate;
    fs.writeFile('ExpressJS/movies.json', JSON.stringify(movies), (err)=> {
        // if(!index) {
        //     res.status(404).json({
        //         status: 'Fail',
        //         message: 'Movie with id: '+id+' not found'
        //     });
        // }
        res.status(201).json({
            status: 'success',

            data: {
                movies: movies
            }
        })
    });
});

app.listen(3000, ()=>{
    console.log('Server has started...');
}); 