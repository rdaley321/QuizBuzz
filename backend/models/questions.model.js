const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
  text: {type: String, required: true},
  placement: {type: Number, required: true},
  img_url: {type: String},
  quiz_id: {type : mongoose.Schema.Types.ObjectId, ref : 'Quiz'}
})

module.exports = mongoose.model('Question', QuestionSchema);
