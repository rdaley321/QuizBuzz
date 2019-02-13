const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuizSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true}
})

module.exports = mongoose.model('Quiz', QuizSchema);
