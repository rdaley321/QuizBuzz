const Result = require('../models/results.model');

exports.result_create = function (req, res, next) {
    let result = new Result(
        {
            resultname: req.body.resultname,
            password: req.body.password
        }
    );

    result.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Result Created successfully')
    })
};

exports.result_details = function (req, res, next) {
    Result.findById(req.params.id, function (err, result) {
        if (err) return next(err);
        res.send(result);
    })
};

exports.result_update = function (req, res, next) {
    Result.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, result) {
        if (err) return next(err);
        res.send('Result updated.');
    });
};

exports.result_delete = function (req, res, next) {
    Result.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
