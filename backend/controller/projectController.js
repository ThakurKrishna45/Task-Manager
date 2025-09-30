const Project = require('../models/project.js');
const User = require('../models/user.js');

const createProject = async (req, res) => {
    try {
        const { name, description, members = [] } = req.body;
        const ownerId = req.user._id;

        // Find users by email and get their IDs
        const users = await User.find({ email: { $in: members } });
        const memberIds = users.map(u => u._id);

      

        const newProject = new Project({
            name,
            description,
            members: memberIds,
            owner: ownerId
        });
        await newProject.save();

        res.status(201).json(newProject);

        // Update users' projects array
        await User.updateMany(
            { _id: { $in: memberIds } },
            { $push: { projects: newProject._id } }
        );
    } catch (error) {
        res.status(500).json({ message: "Error creating project", error: error.message });
    }
};

module.exports = { createProject };