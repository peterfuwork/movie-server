const db = require('./database-connection');

module.exports = {
    getAllMovies() {
        return db('movies');
    },
    getById(id){
        return db.select().from('movies').where('m_id', id);
    },
    // createStudent(newStudent){
    //     return db('students').insert(newStudent).returning('*');
    // },
    // deleteStudent(id){
    //     return db.delete().from('students').where('id', id).returning('*');
    // },
    // updateStudent(id, updateStudentInfo) {
    //     return db.update(updateStudentInfo).from('students').where('id', id).returning('*');
    // }
 }