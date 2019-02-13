const Result = require('../models/results.model');
const Quiz = require('../models/quizzes.model');

exports.result_create = function (req, res, next) {
    let result = new Result(
        {
            title: req.body.title,
            img_url: req.body.img_url,
            blurb: req.body.blurb
        }
    );

    Quiz.findById(req.params.id, (err, quiz) => {
        if(err) return res.status(400).send('Cannot Update Quiz with this Result.')
        quiz.results.push(result)
        quiz.save()
        result.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('Result Created successfully')
        })
    });
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
