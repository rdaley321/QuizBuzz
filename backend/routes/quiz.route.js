const express = require('express');
const router = express.Router();


const quiz_controller = require('../controllers/quiz.controller');


router.delete('/:id/delete', quiz_controller.quiz_delete);
router.put('/:id/update', quiz_controller.quiz_update);
router.get('/:id', quiz_controller.quiz_details);
router.post('/create', quiz_controller.quiz_create);
module.exports = router;
