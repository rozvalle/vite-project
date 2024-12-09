import React from 'react'
import Sidebar from './Sidebar'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import './Subjects.css'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { SubjectModal } from './StudentModal'

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
        <h1>SUBJECT TABLE</h1>
        <SubjectModal />
        <DataTable />
      </div>
  </div>
  )
}

export default Subjects
