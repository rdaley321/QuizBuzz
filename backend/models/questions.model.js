const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
  text: {type: String, required: true},
  placement: {type: Number, required: true},
  img_url: {type: String},
  answers: [ {type : mongoose.Schema.Types.ObjectId, ref : 'Answer'} ]
})

module.exports = mongoose.model('Question', QuestionSchema);
