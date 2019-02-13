const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ResultSchema = new Schema({
  title: {type: String, required: true},
  img_url: {type: String},
  blurb: {type: String}
})

module.exports = mongoose.model('Result', ResultSchema);
