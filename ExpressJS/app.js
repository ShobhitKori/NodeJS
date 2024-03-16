// import package
const express = require('express');
const fs = require('fs');
let app = express();
app.use(express.json());
// route = http method + url
// get - /api/v1/movies
let movies = JSON.parse(fs.readFileSync('movies.json'));

// GET method
// app.get('/api/v1/movies/:id/:name??', (req, res) => {
//     // console.log(req.params);
//     // res.send('Test Movies');
//     const id = req.params.id * 1;   //trpe conversion
//     let movie = movies.find(eL => eL.id === id)
//     if(!movie) {

//         res.status(404).json({
//             status: "fail",
//             message: "Movie with ID " + id + " is not found"
//         });
//         console.log("Movie with ID " + id + " is not found");
//     } else {
//         res.status(200).json({
//             status: "success",
//             data: {
//                 movie : movie
//             }
//         });
//         console.log(req.params);
//     }
//     // res.status(200).json({
//     //     status : "success",
//     //     count : movies.length,
//     //     data: {
//     //         movies : movies,
//     //     }
//     // });
// });

//POST method
app.post('/api/v1/movies', (req, res) => {
    const newId = movies[movies.length - 1].id+1;
    const newMovie = Object.assign({id: newId}, req.body);
    movies.push(newMovie);
    fs.writeFile('movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status : "success",
            data: {
                movies: newMovie
            }
        });
    });
});


// create server
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server has started\nHello from Express!');
});