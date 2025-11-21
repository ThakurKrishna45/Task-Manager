import React from 'react'
import Sidebar from '../Components/sidebar'
const Projects = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="w-full flex flex-col p-5">
        {/* header and create project button */}
        <div className="flex justify-between w-full py-3">
          <div className="heading text-black text-4xl">All Projects</div>
          <div className="createProject bg-blue-600 flex items-center rounded">
            <button
              className="text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Create Project +
            </button>
          </div>
        </div>
        {/* filters */}
        <div className="w-full flex py-7 gap-2">
          <div className="w-auto h-auto border-2 border-gray-300 rounded-2xl shadow-2xl px-3 py-1">All (11)</div>
          <div className="w-auto h-auto border-2 border-gray-300 rounded-2xl shadow-2xl px-3 py-1">Upcoming (8)</div>
          <div className="w-auto h-auto border-2 border-gray-300 rounded-2xl shadow-2xl px-3 py-1">In Progress (3)</div>
          <div className="w-auto h-auto border-2 border-gray-300 rounded-2xl shadow-2xl px-3 py-1">Completed (2)</div>
        </div>
       { /* List of Projects */}
          <div className="w-full flex gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr w-full">
              {Array(1).fill(0).map((_, index) => (
                <div key={index} className="card bg-white shadow-md rounded-lg flex flex-col p-4 w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold">Project Name {index + 1}</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="text-sm text-gray-600 mb-2">Due Date: 2023-12-31</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
                </div>
              ))}
            </div>
          </div>
              </div>
            </div>
          );
}

export default Projects
