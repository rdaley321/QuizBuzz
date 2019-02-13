const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AnswerSchema = new Schema({
  text: {type: String, required: true},
  placement: {type: Number, required: true},
  img_url: {type: String}
})

module.exports = mongoose.model('Answer', AnswerSchema);
