const express = require('express');
const router = express.Router();


const result_controller = require('../controllers/result.controller');


router.delete('/:id/delete', result_controller.result_delete);
router.put('/:id/update', result_controller.result_update);
router.get('/:id', result_controller.result_details);
router.post('/create', result_controller.result_create);
module.exports = router;
