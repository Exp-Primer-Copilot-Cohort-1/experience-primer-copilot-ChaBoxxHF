// Create web server

// Import express
const express = require('express');

// Import router
const router = express.Router();

// Import controller
const controller = require('../controllers/comment.controller');

// Import middleware
const middleware = require('../middlewares/auth.middleware');

// Import validation
const validation = require('../validations/comment.validation');

// Get all comments
router.get('/', controller.index);

// Create comment
router.post('/', middleware.checkAuth, validation.create, controller.create);

// Delete comment
router.delete('/:id', middleware.checkAuth, validation.delete, controller.delete);

// Update comment
router.put('/:id', middleware.checkAuth, validation.update, controller.update);

module.exports = router;