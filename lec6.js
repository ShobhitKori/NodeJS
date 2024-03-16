const express = require('express');
const fs = require('fs');
let app = express();
app.use(express.json());
// route = http method + url
// get - /api/v1/movies
let movies = JSON.parse(fs.readFileSync('movies.json'));

// GET method
app.get('/api/v1/movies', (req, res) => {
    res.status(200).json({
        status : "success",
        count : movies.length,
        data: {
            movies : movies,
        }
    });
});
