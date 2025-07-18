import React from 'react'
import Header from '../components/Header'
import DashBoardCart from '../components/DashBoardCart'

const DashBoard = () => {
  return (
    <div className='w-full bg-gray-300'>
        <Header/>
        <div className='flex'>
        <DashBoardCart  title="Total Users" value="1,2000"/>
        <DashBoardCart  title="Sales" value="₹25,000"/>
        <DashBoardCart  title="Order" value="350"/>
        </div>
      
    </div>
  )
}

export default DashBoard

// return (
//     <div className="flex flex-col gap-6 p-6 flex-1">
//       <Header />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <DashboardCard title="Total Users" value="1,200" />
//         <DashboardCard title="Sales" value="₹25,000" />
//         <DashboardCard title="Orders" value="320" />
//       </div>
//     </div>
//   );
