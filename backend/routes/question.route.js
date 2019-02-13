const express = require('express');
const router = express.Router();


const question_controller = require('../controllers/question.controller');


router.delete('/:id/delete', question_controller.question_delete);
router.put('/:id/update', question_controller.question_update);
router.get('/:id', question_controller.question_details);
router.post('/create/:id', question_controller.question_create);
module.exports = router;
