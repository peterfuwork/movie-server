exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', (movie) => {
        movie.string('m_id')
        movie.string('name')
        movie.string('desc')
        movie.string('type')
        movie.string('image')
        movie.string('director')
        movie.integer('year')
        movie.decimal('stars')
        movie.decimal('length_min')
        movie.string('MPAA')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies')
};
