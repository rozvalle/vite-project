import React from 'react'
import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div class="navigation">
    <div class="logo">
    <Link to="/"><img src="\src\assets\my-image.png"></img></Link> <br />
    </div>
    <div class="items">
      <div class="item">
        <img src="\src\assets\home1.png"></img>
        <h2><Link to="/">Home</Link></h2>       
      </div>
      <hr />
      <div class="item">
        <img src="\src\assets\stuents.png"></img>
        <h2><Link to="/students">Students</Link></h2>     
      </div>
      <hr />
      <div class="item">
        <img src="\src\assets\bookwhite.png"></img>
        <h2><Link to="/subjects">Subjects</Link></h2>    
      </div>  
    </div>     
  </div>
  )
}

export default Sidebar
