const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user.route');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
let dev_db_url = 'mongodb+srv://ryan:2gE3U8dYJM9GtBa@quizbuzz-kk5m8.mongodb.net/test?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
