const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
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
    })
})


app.listen(PORT);