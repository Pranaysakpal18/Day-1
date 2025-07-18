import React from 'react'

const DashBoardCart = ({title,value}) => {
  return (
    <div className='border-2 h-30 w-40 flex flex-col items-center m-5 bg-amber-600'>

        <p className='text-2xl font-bold mb-5 mt-3 '>{title}</p>
        <h3 className='text-2xl font-bold text-white'>{value}</h3>
      
    </div>
  )
}

export default DashBoardCart
