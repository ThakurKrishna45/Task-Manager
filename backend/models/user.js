const mongoose = require('mongoose');
const tasks = require('./tasks');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true,trim: true },
  password: { type: String, required: true, minlength: 6,trim: true },
  fullName: { type: String, required: true,trim: true },
  email: { type: String, required: true,unique: true ,trim: true},
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  role: {
    type: String,
    enum: ['user', 'admin', 'head'],
    default: 'user',
  },
});

module.exports = mongoose.model('User', userSchema);