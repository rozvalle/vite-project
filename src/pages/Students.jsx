import React from 'react'
import './Students.css'
import Sidebar from './Sidebar'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

function Students() {
  return (
    <div className="main">
      <Sidebar />

      <div class="title">
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
        </Button><br /><br />
        <DataTable />
      </div>
    </div>
  )
}

export default Students