import React from 'react'
import { LayoutDashboard} from 'lucide-react';
import { User, Settings,LogOut} from 'lucide-react';
import { Link } from 'react-router-dom';



const SideBar = () => {
  return (
    <div className='w-64 bg-gray-200 h-screen p-3'>
        <h1 className='text-3xl mt-5 mb-10'>My DashBoard</h1>
        <ul className='mt-5 text-1xl cursor-pointer'>
            <Link to="/" className='mt-4 flex items-center gap-3'> <span><LayoutDashboard/></span>DashBoard</Link>
            <Link to="/user" className='mt-4 flex items-center gap-3'><span><User/></span>User</Link>
            <li className='mt-4 flex items-center gap-3'><span><Settings/></span>Setting</li>   
            <li className='mt-4 flex items-center gap-3'><span><LogOut/></span>Log-Out</li>     

        </ul>
      
    </div>
  )
}

export default SideBar
