const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/addComment', authenticateToken, commentController.addComment);

module.exports = router;
