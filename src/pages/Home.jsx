import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import banner from '/src/assets/mainhlight.png'

function Home() {
  return (
    <div class="main">
      <Sidebar />
      <div class="welcometitle">
        <img src={ banner } alt="" className='banner' />
      {/*  <h1>Welcome To Saint Mary's University</h1> */}
      </div>
    </div>
  )
}

export default Home
