import React from 'react'
import "../styles/home.scss"
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        home container
      </div>
    </div>
  )
}

export default Home