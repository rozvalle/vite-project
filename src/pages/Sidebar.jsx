import React from 'react'
import "./Sidebar.css"
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import StudentIcon from '@mui/icons-material/AddCircle';
import SubjectIcon from '@mui/icons-material/Subject';
import LogoutIcon from '@mui/icons-material/Logout';
import smulogo from '/src/assets/smudark.png'

function Sidebar() {
  return (
    <div class="navigation">
		<div class="logo">
			<Link to="/"><img src={ smulogo }></img></Link> <br />
		</div>
    	<hr />
		<div class="items">
			<Link to="/">
			<div class="item">
				<HomeIcon color="inherit" fontSize='medium' className='SidebarIcons' />
				<p>Home</p>    
			</div>
			</Link>
			<Link to="/students">
			<div class="item">
				<StudentIcon color="inherit" fontSize='medium' className='SidebarIcons' />
				<p>Students</p>    
			</div>
			</Link>
			<Link to="/subjects">
			<div class="item">
				<SubjectIcon color="inherit" fontSize='medium' className='SidebarIcons' />
				<p>Subjects</p>    
			</div>
			</Link>
			<Link to="/login">
			<div class="item">
				<LogoutIcon color="inherit" fontSize='medium' className='SidebarIcons' />
				<p>Logout</p>    
			</div>
			</Link>
		</div>     
  </div>
  )
}

export default Sidebar
