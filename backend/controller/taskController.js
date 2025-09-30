const Task = require('../models/tasks.js');
const User = require('../models/user.js');
const Project = require('../models/project.js');

const create = async (req, res) => {
    try {
        const {
            title,
            description,
            project,
            assignedTo = [],
            status,
            priority,
            dueDate,
            comments = []
        } = req.body;

      
        const userId = req.user._id; // assuming you have user info in req.user (from auth middleware)
    

        const task = new Task({
            title,
            description,
            project,
            assignedTo,
            status,
            priority,
            dueDate,
            comments,
            createdBy: userId
        });

        await task.save();

        // Update the user's tasks array
        await Project.findByIdAndUpdate(project, { $push: { tasks: task._id } });
       await User.updateMany(
        { _id: { $in: assignedTo } },
        { $push: { tasks: task._id } }
    );

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error creating task", error: error.message });
    }
}
module.exports = { create };