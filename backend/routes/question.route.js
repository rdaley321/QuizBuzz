const express = require('express');
const router = express.Router();


const question_controller = require('../controllers/question.controller');


router.delete('/question/:id/delete', question_controller.question_delete);
router.put('/question/:id/update', question_controller.question_update);
router.get('/question/:id', question_controller.question_details);
router.post('/question/create', question_controller.question_create);
module.exports = router;
