import React from 'react'
import Sidebar from './Sidebar'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import './Subjects.css'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'code', headerName: 'Class Code', width: 100 },
  { field: 'coursenumber', headerName: 'Course Number', width: 150 },
  { field: 'subjectdesc', headerName: 'Subject Description', width: 400 },
  { field: 'units', headerName: 'Units', width: 50 },
  { field: 'schedule', headerName: 'Schedule', width: 200 },
];

const rows = [
  { id: 1, 
    code: '4757', 
    coursenumber: 'IPT101', 
    subjectdesc: 'Integrative Programming and Technologies', 
    units: '3.0', 
    schedule:'TF 7:30-10:00 AM'},

];

function DataTable() {
  return (
    <Paper sx={{ height: 369, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5, 10]}
        pagination
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

function Subjects() {
  return (
    <div className="main">
    <Sidebar />

    <div className="subjecttitle">
      <h1>ADD SUBJECT</h1>
      <TextField label="Class Code" margin='dense'  /> <br />
      <TextField label="Course Number" margin='dense'/> <br />
      <TextField label="Subject Description"  margin='dense' multiline sx={{ width:'225px'}}/> <br />
      <TextField label="Units"  margin='dense' /><br />
      <TextField label="Schedule" margin='dense'  /><br /><br />
      
      <Button variant="contained" size="large" 
        sx={{ backgroundColor: '#292974', 
          color: 'white',  
          fontFamily: 'Poppins' }}>
            ADD SUBJECT
      </Button><br /><br />
      <DataTable />
    </div>
  </div>
  )
}

export default Subjects
