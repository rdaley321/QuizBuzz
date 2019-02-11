const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {type: String, required: true, index: { unique: true } },
    password: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('User', UserSchema);
