const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuizSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  questions: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Question' } ],
  results: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Result' } ]
})

module.exports = mongoose.model('Quiz', QuizSchema);
