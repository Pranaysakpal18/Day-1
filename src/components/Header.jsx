import React from 'react'
import { UserPen } from 'lucide-react';

const Header = () => {
  return (
    <div className='bg-black text-white text-3xl p-6 flex justify-center'>
        <h1 className='flex items-center gap-2'><span><UserPen/></span> Welcome Pranay</h1>
      
    </div>
  )
}

export default Header
