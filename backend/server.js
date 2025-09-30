const express = require('express')
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');

const app=express();
app.use(cors()); 
app.use(express.json());
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const url= 'mongodb://localhost:27017/'

const dbName='task-manager';

async function main() {
  await mongoose.connect(url+dbName);
}
main().catch(err=>{
  console.log(err);
});

app.use('/api', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
