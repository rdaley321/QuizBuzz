const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AnswerSchema = new Schema({
  text: {type: String, required: true},
  placement: {type: Number, required: true},
  img_url: {type: String},
  question_id:{type : mongoose.Schema.Types.ObjectId, ref : 'Question'},
  result_id:{type : mongoose.Schema.Types.ObjectId, ref : 'Result'}
})

module.exports = mongoose.model('Answer', AnswerSchema);
