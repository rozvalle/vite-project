import React from 'react'
import './Students.css'
import Sidebar from './Sidebar'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import StudentModal from './StudentModal'

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
        <h1>STUDENT TABLE</h1> 
        <StudentModal />
        <DataTable />
      </div>
    </div>
  )
}

export default Students