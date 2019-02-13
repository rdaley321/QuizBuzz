const express = require('express');
const router = express.Router();


const result_controller = require('../controllers/result.controller');


router.delete('/result/:id/delete', result_controller.result_delete);
router.put('/result/:id/update', result_controller.result_update);
router.get('/result/:id', result_controller.result_details);
router.post('/result/create', result_controller.result_create);
module.exports = router;
