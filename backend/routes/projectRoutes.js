const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');
const roleCheck = require('../middleware/roleCheck');
const { createProject } = require('../controller/projectController');

// router.post('/create', authenticateUser, roleCheck, createProject);
router.post('/create', authenticateUser,createProject);

module.exports = router;