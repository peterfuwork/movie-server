const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const randomString = require('random-string');
const PORT = process.env.PORT || 4000;
const queries = require('./queries');

// let movies = require('./movies');
// let actors = require('./actors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send({ message: "hello movie" });
    next();
});

app.get('/movies', (req, res) => {
    queries.getAllMovies().then(movies => {
        res.send({ movies });
    });   
})

app.get('/movies/m_id/:id', (req, res) => {
    queries.getById(req.params.id).then(movie => {
        res.send({ movie });
    });
})

app.post('/moviePOST', (req, res, next) => {
    console.log('req.body', req.body)
    const body = req.body;
    // const randomStr = randomString({
    //     length: 10,
    //     numeric: true,
    //     letters: true,
    //     special: false
    // });
    const newObj = {
        name: body.name,
        desc: body.desc,
        type: body.type,
        image: body.image,
        director: body.director,
        year: Number(body.year),
        stars: body.stars,
        length_min: body.length,
        MPAA: body.MPAA
    };
    queries.createMovie(newObj)
    .then(Movie => res.send(Movie))
})

app.put('/moviePUT', (req, res, next) => {
    const body = req.body;
    queries.updateMovie(body.m_id, body)
    .then(Movie => res.send(Movie))
});

app.delete('/movieDELETE', (req, res, next) => {
    queries.deleteMovie(req.body.m_id)
    .then(Movie => {
        res.status(200).send(Movie);
    })
    
})

app.get('/movies/test/', (req, res, next) => {
    console.log(req.query);
    const newObj = { type: req.query.type, stars: Number(req.query.stars)};
    res.send(newObj);
});


app.listen(PORT);