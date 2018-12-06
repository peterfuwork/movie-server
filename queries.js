const db = require('./database-connection');

module.exports = {
    getAllMovies() {
        return db('movies');
    },
    getById(id){
        return db.select().from('movies').where('m_id', id);
    },
    createMovie(newMovie){
        return db('movies').insert(newMovie).returning('*');
    },
    deleteMovie(id){
        return db.delete().from('movies').where('m_id', id).returning('*');
    }
    // updateStudent(id, updateStudentInfo) {
    //     return db.update(updateStudentInfo).from('students').where('id', id).returning('*');
    // }
 }