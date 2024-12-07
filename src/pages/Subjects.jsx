import React from 'react'
import Sidebar from './Sidebar'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import './Subjects.css'

function Subjects() {
  return (
    <div className="main">
    <Sidebar />

    <div class="title">
      <h1>Add Subjects</h1>
      <TextField label="ID Number" margin='dense'  /> <br />
      <TextField label="First Name" margin='dense'/> <br />
      <TextField label="Last Name"  margin='dense' /> <br />
      <TextField label="Middle Name"  margin='dense' /><br />
      <TextField label="Course" margin='dense'  /><br />
      <TextField label="Year" margin='dense' /> <br /><br />
      
      <Button variant="contained" size="large" 
        sx={{ backgroundColor: '#292974', 
          color: 'white',  
          fontFamily: 'Poppins' }}>
            ADD SUBJECT
      </Button><br /><br />
    </div>
  </div>
  )
}

export default Subjects
