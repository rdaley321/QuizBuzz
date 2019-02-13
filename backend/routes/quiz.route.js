const express = require('express');
const router = express.Router();


const quiz_controller = require('../controllers/quiz.controller');


router.delete('/quiz/:id/delete', quiz_controller.quiz_delete);
router.put('/quiz/:id/update', quiz_controller.quiz_update);
router.get('/quiz/:id', quiz_controller.quiz_details);
router.post('/quiz/create', quiz_controller.quiz_create);
module.exports = router;
