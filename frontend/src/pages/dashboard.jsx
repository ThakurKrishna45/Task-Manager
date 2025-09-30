import React from 'react'
import Sidebar from '../Components/sidebar'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
    </div>
  )
}

export default Dashboard
