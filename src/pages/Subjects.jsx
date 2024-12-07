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
      <h1>ADD SUBJECT</h1>
      <TextField label="Class Code" margin='dense'  /> <br />
      <TextField label="Course Number" margin='dense'/> <br />
      <TextField label="Subject Description"  margin='dense' /> <br />
      <TextField label="Units"  margin='dense' /><br />
      <TextField label="Schedule" margin='dense'  /><br /><br />
      
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
