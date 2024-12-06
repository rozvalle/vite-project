import React from 'react'
import Sidebar from './Sidebar'

function Subjects() {
  return (
    <div className="main">
    <Sidebar />

    <div class="title">
      <h1>ADD STUDENT</h1>
      <TextField label="ID Number" margin='dense'  /> <br />
      <TextField label="First Name" margin='dense'/> <br />
      <TextField label="Last Name"  margin='dense' /> <br />
      <TextField label="Middle Name"  margin='dense' /><br />
      <TextField label="Course" margin='dense'  /><br />
      <TextField label="Year" margin='normal' /> <br /><br />
      
      <Button variant="contained" size="large" sx={{ backgroundColor: '#292974', color: 'white' }}>ADD STUDENT</Button><br /><br />
        <DataTable />
    </div>
  </div>
  )
}

export default Subjects
