import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import DashBoardCart from '../components/DashBoardCart'
import data from '../Data/DashboardData'
import BarChart from '../charts/BarChat'
import LineChart from '../charts/LineChart'
import PieChart from '../charts/PieChart'

const DashBoard = () => {
  const [cart,setCart]=useState([])
  const [loading,setLoading]=useState(true)


  useEffect(()=>{
    setTimeout(()=>{
      const apiData=[
      
    {title:"Total Users" , value:"1,451" , icon :"👥"},
    {title:"Total Views" , value:"1,45,687", icon:"👁️"},
    {title:"Session" , value:"456", icon:"🕒"},
    {title:"Bounce Rate" , value:"41%", icon:"📉"}

]

setCart(apiData)
setLoading(false) 
    },2000)

  },[])


  if(loading){
    return <div className='text-2xl flex items-center mx-120'>Something Loading...</div>
  }



  return (
    <div className='w-full bg-gray-300'>
        <Header/>
        {/* <div className='flex'>
        <DashBoardCart  title="Total Users" value="1,2000"/>
        <DashBoardCart  title="Sales" value="₹25,000"/>
        <DashBoardCart  title="Order" value="350"/>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Cards map se ban rahe hai */}
        {cart.map((stat, index) => (
          <DashBoardCart key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div className="bg-white p-4 rounded-xl shadow"><BarChart /></div>
  <div className="bg-white p-4 rounded-xl shadow"><LineChart /></div>
  <div className="bg-white p-4 rounded-xl shadow"><PieChart /></div>
</div>




    </div>
  )
}

export default DashBoard
