const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
router.delete('/:id/delete', user_controller.user_delete);
router.put('/:id/update', user_controller.user_update);
router.get('/:id', user_controller.user_details);
router.post('/create', user_controller.user_create);
router.get('/test', user_controller.test);
module.exports = router;
