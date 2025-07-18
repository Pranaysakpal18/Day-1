import React from 'react'
import { UserPen } from 'lucide-react';

const Header = () => {
  return (
    <div className='text-3xl p-6 flex justify-start w-full border-2 bg-blue-400'>
        <h1 className='flex items-center gap-2'><span><UserPen/></span> Welcome Pranay</h1>
      
    </div>
  )
}

export default Header
