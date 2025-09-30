import {React,useState} from 'react'
import Sidebar from '../Components/sidebar';

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    project: '',
    priority: 'medium',
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(taskData);
    // Call API to create task
  };

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className="flex-1 flex justify-center items-start">
        <div className="taskDetail flex-1 items-center h-screen border-gray-300 rounded-lg bg-white shadow-md p-6 flex flex-col space-y-6 mt-10">
          <div className="inner w-3/4 border flex items-center justify-center p-6">
            <div className='flex flex-col space-y-4 w-1/2'>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold text-gray-800' htmlFor="taskTitle">Task Title</label>
                <input
                  id="taskTitle"
                  type='text'
                  placeholder='Enter your Title'
                  name="title"
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold text-gray-800' htmlFor="priority">Priority</label>
                <select
                  id='priority'
                  name="priority"
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  defaultValue="medium"
                >
                
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold text-gray-800' htmlFor="dueDate">Due Date</label>
                <input
                  id="dueDate"
                  type='date'
                  name='dueDate'
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold text-gray-800' htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                  rows="4"
                ></textarea>
                
              </div>
            </div>
          </div>
            <button onClick={handleSubmit} className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>Create Task</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTask
