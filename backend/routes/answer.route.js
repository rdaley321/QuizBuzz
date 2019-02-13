const express = require('express');
const router = express.Router();


const answer_controller = require('../controllers/answer.controller');


router.delete('/:id/delete', answer_controller.answer_delete);
router.put('/:id/update', answer_controller.answer_update);
router.get('/:id', answer_controller.answer_details);
router.post('/create:id', answer_controller.answer_create);
module.exports = router;
