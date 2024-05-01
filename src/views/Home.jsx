import React from 'react'
import "../styles/home.scss"
import Sidebar from './components/Sidebar'

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className='homeContainer'>container</div>
    </div>
  )
}

export default Home