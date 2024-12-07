import React from 'react'
import './Students.css'
import Sidebar from './Sidebar'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import AddStudentModal from './modaltest'

const columns = [
  { field: 'id', headerName: 'ID Number', width: 130 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'MI', headerName: 'MI', width: 20 },
  
  {
    field: 'course',
    headerName: 'Course',
    width: 70,
  },
  {
    field: 'year',
    headerName: 'Year',
    width: 40,
  },
];

const rows = [
  { id: 39574220, lastName: 'Valeros', firstName: 'Francis Elmo', MI: 'C.', course:'BSIT', year: '3' },
];

function DataTable() {
  return (
    <Paper sx={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={[5]}
        pageSizeOptions={[5, 10]}
        pagination
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

function Students() {
  return (
    <div className="main">
      <Sidebar />
      <div class="studenttitle">
        <h1>ADD STUDENT</h1>
        <TextField label="ID Number" margin='dense' /> <br />
        <TextField label="First Name" margin='dense'/> <br />
        <TextField label="Last Name"  margin='dense' /> <br />
        <TextField label="Middle Name"  margin='dense' /><br />
        <TextField label="Course" margin='dense'  /><br />
        <TextField label="Year" margin='dense' /> <br /><br />
        
        <Button variant="contained" size="large"
        sx={{ backgroundColor: '#292974', 
          color: 'white',  
          fontFamily: 'Poppins' }}>
            ADD STUDENT
        </Button> <br /><br />
        <AddStudentModal /><br />
        <DataTable />
      </div>
    </div>
  )
}

export default Students