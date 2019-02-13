const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuizSchema = new Schema({})

module.exports = mongoose.model('Quiz', QuizSchema);
