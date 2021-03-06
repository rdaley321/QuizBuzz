const Quiz = require('../models/quizzes.model');

exports.quiz_create = function (req, res, next) {
    let quiz = new Quiz(
        {
            title: req.body.title,
            author: req.body.author
        }
    );

    quiz.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(quiz)
    })
};

exports.quiz_details = (req, res, next) => {
    Quiz
      .findById(req.params.id)
      .populate('questions')
      .populate({
         path: 'questions',
         populate: {
           path: 'answers',
           model: 'Answer'
         }
      })
      .populate('results')
      .exec((err, quiz) => {
          if (err) return next(err)
          res.send(quiz);
      })
};

exports.quiz_update = function (req, res, next) {
    Quiz.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, quiz) {
        if (err) return next(err);
        res.send('Quiz updated.');
    });
};

exports.quiz_delete = function (req, res, next) {
    Quiz.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.quiz_all = (req, res, next) => {
  Quiz.find()
    .populate('questions')
    .populate({
       path: 'questions',
       populate: {
         path: 'answers',
         model: 'Answer'
       }
    })
    .populate('results')
    .exec((err, quizzes) => {
        if (err) return next(err)
        res.send(quizzes);
    })
}
