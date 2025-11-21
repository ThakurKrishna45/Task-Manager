const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');
const roleCheck = require('../middleware/roleCheck');
const { createProject,fetchProjectById,fetchProjects } = require('../controller/projectController');

// router.post('/create', authenticateUser, roleCheck, createProject);
router.post('/create', authenticateUser, createProject);
router.get('/fetch/:id', authenticateUser, fetchProjectById);
router.get('/fetch', authenticateUser, fetchProjects);

module.exports = router;