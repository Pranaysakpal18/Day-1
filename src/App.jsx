import React from 'react'
import SideBar from './components/SideBar'

import Navbar from './components/Navbar'
import DashBoard from './Pages/DashBoard'
import {Route,Routes } from 'react-router-dom'
import Users from './Pages/Users'

const App = () => {
  return (
    
    <div>

      <Navbar/>



    <div className='flex'>

      
      <SideBar/>

      <div className='w-full'>
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/user' element={<Users/>}/>



        </Routes>


      </div>

{/* 
      <DashBoard/> */}

      

      </div>
    </div>
    
  )
}

export default App
