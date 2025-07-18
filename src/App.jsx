import React from 'react'
import SideBar from './components/SideBar'

import Navbar from './components/Navbar'
import DashBoard from './Pages/DashBoard'

const App = () => {
  return (
    <div>

      <Navbar/>



    <div className='flex'>

      
      <SideBar/>
      <DashBoard/>

      

      </div>
    </div>
  )
}

export default App
