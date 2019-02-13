const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
  text: {type: String, required: true},
  placement: {type: Integer, required: true},
  img_url: {type: String},
  quizzes: [ {type : mongoose.Schema.Types.ObjectId, ref : 'Question'} ]
})

module.exports = mongoose.model('Question', QuestionSchema);
