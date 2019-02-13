const Answer = require('../models/answers.model');
const Question = require('../models/questions.model')

exports.answer_create = function (req, res, next) {
    let answer = new Answer(
        {
            text: req.body.text,
            placement: req.body.placement,
            img_url: req.body.img_url
        }
    );

    Question.findById(req.params.id, (err, question) => {
        if(err) return res.status(400).send('Cannot Update Question with this answer.')
        question.answers.push(answer)
        question.save()
        answer.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('Answer Created successfully')
        })
    });
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
