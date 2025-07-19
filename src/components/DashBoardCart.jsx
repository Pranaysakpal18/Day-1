import React from 'react'
import data from '../Data/DashboardData'
import { Colors } from 'chart.js'
const DashBoardCart = ({title,value,icon,color}) => {
  return (
    <div className='bg-white shadow-md rounded-xl p-4 flex flex-col gap-2 hover:scale-105 transition-transform m-4 items-center'>
      <div className={`font-bold text-5xl ${color}`}>{icon}</div>
        <p className='text-2xl font-bold mb-5 mt-3 '>{title}</p>
        <h3 className='text-2xl font-bold'>{value}</h3>

      
    </div>
  )
}

export default DashBoardCart
