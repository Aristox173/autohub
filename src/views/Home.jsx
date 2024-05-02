import React from 'react'
import "../styles/home.scss"
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Widget from './components/Widget'

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className='widgets'>
          <Widget type="supplier"/>
          <Widget type="mechanic"/>
          <Widget type="product"/>
          <Widget type="order"/>
        </div>
      </div>
    </div>
  )
}

export default Home