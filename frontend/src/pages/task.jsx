import React from 'react'
import Sidebar from '../Components/sidebar'

const Task = () => {
  return (
    <div className='flex bg-gray-100 min-h-screen'>
        <Sidebar />
        <div className='p-6 flex-1'>
            <h1 className='text-2xl font-bold text-gray-800 mb-4'>My Tasks</h1>
            <div className="taskDetail border mb-2 border-gray-300 rounded-lg bg-white shadow-md p-4 flex items-start space-x-4">
                <input type='checkbox' className='w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500' />
                <div className="inner">
                     <div className='flex space-x-4 justify-between'>
                         <h1 className='text-xl font-semibold text-gray-800'>Task Title</h1>
                        <p className='text-sm text-black-600 font-bold'>Status:Active</p>
                    </div>
                    <div className='flex space-x-4 mt-2 justify-between'>
                        <p className='text-sm text-black-600 font-bold'>Priority: High</p>
                        <p className='text-sm text-black-600 font-bold'>Due Date: 2024-12-31</p>
                    </div>
                    <p className='text-gray-800 font-bold mt-4'>Description</p>
                    <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aperiam officia totam doloremque ad corrupti excepturi dolorum alias accusamus esse! Cumque expedita impedit possimus accusamus quae fugit ipsum veritatis maxime.</p>
                </div>
            </div>
            {/* 2nd */}
            <div className="taskDetail border border-gray-300 rounded-lg bg-white shadow-md p-4 flex items-start space-x-4">
                <input type='checkbox' className='w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500' />
                <div className="inner">
                     <div className='flex space-x-4 justify-between'>
                         <h1 className='text-xl font-semibold text-gray-800'>Task Title</h1>
                        <p className='text-sm text-black-600 font-bold'>Status:Active</p>
                    </div>
                    <div className='flex space-x-4 mt-2 justify-between'>
                        <p className='text-sm text-black-600 font-bold'>Priority: High</p>
                        <p className='text-sm text-black-600 font-bold'>Due Date: 2024-12-31</p>
                    </div>
                    <p className='text-gray-800 font-bold mt-4'>Description</p>
                    <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aperiam officia totam doloremque ad corrupti excepturi dolorum alias accusamus esse! Cumque expedita impedit possimus accusamus quae fugit ipsum veritatis maxime.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Task
