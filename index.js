const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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

app.post('/movies/moviePOST', (req, res, next) => {
    console.log('req.body', req.body)
    const body = req.body;
    const newObj = {
        name: body.name,
        desc: body.desc,
        type: body.type,
        image: body.image,
        director: body.director,
        year: Number(body.year),
        stars: Number(body.stars),
        length_min: body.length,
        MPAA: body.MPAA
    };
    console.log(newObj);
    queries.createMovie(newObj)
    .then(movie => {
        res.send({status: 200, message: 'success!', movie});
    });
    
})

app.put('/movies/moviePUT', (req, res, next) => {
    console.log(req.body)
    const body = req.body;
    queries.updateMovie(body.m_id, body)
    .then(Movie => res.send(Movie))
});

app.delete('/movies/movieDELETE', (req, res, next) => {
    queries.deleteMovie(req.body.m_id)
    .then(Movie => {
        res.status(200).send(Movie);
    })
    
})

app.get(`/movies/find/`, (req, res, next) => {
    const { per, page } = req.query;
    queries.getAllMovies()
    .then(movies => {
        const indexOfLastMovie = page * per;
        const indexOfFirstMovie = indexOfLastMovie - per;
        const currentMovie = movies.slice(indexOfFirstMovie, indexOfLastMovie);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(movies.length / per); i++) {
            pageNumbers.push(i);
        }
        const total_pages = pageNumbers[pageNumbers.length - 1];
        // console.log('total_pages',total_pages)
        const newObj = {
            per: Number(per),
            page: Number(page),
            total_pages,
            currentMovie
        }
        res.send(newObj);
    });
});

app.listen(PORT);