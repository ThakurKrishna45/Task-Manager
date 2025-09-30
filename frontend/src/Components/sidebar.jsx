import React from 'react'
import { SidebarData } from './sidebarData'
const Sidebar = () => {
  return (
    <div className='h-screen w-64 bg-gray-800 text-white'>
        <h1 className='text-xl font-bold p-4'>SideBar</h1>
        <ul className='flex flex-col'>
          {SidebarData.map((item, index) => (
            <li key={index} onClick={() => {window.location.pathname=item.link}} className='flex items-center p-2 px-4 hover:bg-gray-700 cursor-pointer'>
              {item.icon}
              <span className='ml-2'>{item.title}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Sidebar
