const express = require('express');
const router = express.Router();


const answer_controller = require('../controllers/answer.controller');


router.delete('/answer/:id/delete', answer_controller.answer_delete);
router.put('/answer/:id/update', answer_controller.answer_update);
router.get('/answer/:id', answer_controller.answer_details);
router.post('/answer/create', answer_controller.answer_create);
module.exports = router;
