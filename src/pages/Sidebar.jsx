import React from 'react'
import "./Sidebar.css"
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import StudentIcon from '@mui/icons-material/School';
import SubjectIcon from '@mui/icons-material/LibraryBooks';
import smulogo from '/src/assets/my-image.png'

function Sidebar() {
  return (
    <div class="navigation">
    <div class="logo">
    <Link to="/"><img src={ smulogo }></img></Link> <br />
    </div>
    <hr />
    <div class="items">
      <div class="item">
        <HomeIcon color="inherit"  fontSize='medium' className='SidebarIcons' />
        <h2><Link to="/">Home</Link></h2>       
      </div>
      <div class="item">
        <StudentIcon color="inherit" fontSize='medium' className='SidebarIcons' />
        <h2><Link to="/students">Students</Link></h2>     
      </div>
      <div class="item">
        <SubjectIcon color="inherit" fontSize='medium' className='SidebarIcons' />
        <h2><Link to="/subjects">Subjects</Link></h2>    
      </div>  
    </div>     
  </div>
  )
}

export default Sidebar
