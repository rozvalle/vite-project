import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import banner from '/src/assets/banner.jpg'

function Home() {
  return (
    <div class="main">
      <Sidebar />
      <div class="welcometitle">
        <h1>Welcome To Saint Mary's University</h1>
      </div>
    </div>
  )
}

export default Home
