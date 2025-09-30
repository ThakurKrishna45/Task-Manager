const { create } = require("../controller/taskController");

const authenticateUser = require('../middleware/authentication');
const router= require('express').Router();

router.post('/create', authenticateUser, create);
module.exports= router;