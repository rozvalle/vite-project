import React from 'react'
import './Login.css'
import smulogo from '/src/assets/smulight.png'
import { TextField, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

function Login() {
  return (
    <div className='loginmain'>
      <div className='loginbox'>
        <div className='loginlogo'>
			<img src={ smulogo } alt="" />
			<h1>STUDENT INFORMATION SYSTEM</h1>
			<TextField label="Username" variant='outlined' sx={{  width:'300px',}} margin='dense' />
			<TextField label="Password" variant='outlined' type='password' sx={{ width:'300px'}} margin='dense' />
				<Button 
					href='/'
					variant='contained'
					size='large'
					className='loginbtn'
					sx= {{
						backgroundColor:'#292974',
						width:'300px',
						marginTop:'10px',
						'&:hover': {
							color: 'white',
						},       
					}}
				>
					<LoginIcon color="white" fontSize='medium' className='LoginIcon' />
					&nbsp; Sign In
				</Button>
				<a href="" className='newaccount'>Create new account</a>
      	</div>
      </div>    
    </div>
  )
}

export default Login
