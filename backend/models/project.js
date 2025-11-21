const mongoose = require('mongoose');
const tasks = require('./tasks');
const users = require('./user');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    dueDate: { type: Date },
    status: { type: String, enum: ['Upcoming', 'In Progress', 'Completed'], default: 'Upcoming' },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Project', projectSchema);