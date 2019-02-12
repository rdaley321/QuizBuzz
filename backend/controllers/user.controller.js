const User = require('../models/users.model');

//Simple version, without validation or sanitation
exports.test = (req, res) => {
    res.send('Greetings from the Test controdsadsadsdsller!');
};

exports.user_create = function (req, res, next) {
    let user = new User(
        {
            username: req.body.username,
            password: req.body.password
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res, next) {
  console.log('REQ ',req.body)
  // console.log('RES ',res)
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User updated.');
    });
};

exports.user_delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
