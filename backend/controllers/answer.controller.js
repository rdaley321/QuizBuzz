const Answer = require('../models/answers.model');

exports.answer_create = function (req, res, next) {
    let answer = new Answer(
        {
            text: req.body.text,
            placement: req.body.placement,
            img_url: req.body.img_url,
            question_id: req.body.question_id,
            result_id: req.body.result_id
        }
    );

    answer.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Answer Created successfully')
    })
};

exports.answer_details = function (req, res, next) {
    Answer.findById(req.params.id, function (err, answer) {
        if (err) return next(err);
        res.send(answer);
    })
};

exports.answer_update = function (req, res, next) {
    Answer.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, answer) {
        if (err) return next(err);
        res.send('Answer updated.');
    });
};

exports.answer_delete = function (req, res, next) {
    Answer.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
