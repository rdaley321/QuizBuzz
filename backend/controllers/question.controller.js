const Question = require('../models/questions.model');

exports.question_create = function (req, res, next) {
    let question = new Question(
        {
            text: req.body.text,
            placement: req.body.placement,
            img_url: req.body.img_url,
            quiz_id: req.body.quiz_id
        }
    );

    question.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Question Created successfully')
    })
};

exports.question_details = function (req, res, next) {
    Question.findById(req.params.id, function (err, question) {
        if (err) return next(err);
        res.send(question);
    })
};

exports.question_update = function (req, res, next) {
    Question.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, question) {
        if (err) return next(err);
        res.send('Question updated.');
    });
};

exports.question_delete = function (req, res, next) {
    Question.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
