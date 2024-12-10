import { Modal, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './StudentModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function StudentModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button 
        onClick={handleOpen}
        variant='contained'
        size='large'
        sx= {{
          backgroundColor:'#292974',
          fontFamily:'Poppins',
          marginTop:'10px',
          marginBottom:'20px'
        }}
        >
          Add Student
        </Button>

        <Modal
        open={open}
        onClose={handleClose}
        >

        <Box sx={{ ...style, 
          width: 350,
          borderRadius:'10px', 
        }}>
            <h2>Add Student</h2>
            <div className='student_txt'>
              <TextField label="ID Number" margin='dense' fullWidth /> <br />
              <TextField label="First Name" margin='dense'fullWidth /> <br />
              <TextField label="Last Name"  margin='dense' fullWidth /> <br />
              <TextField label="Middle Name"  margin='dense' fullWidth /><br />
              <TextField label="Course" margin='dense' fullWidth /><br />
              <TextField label="Year" margin='dense' fullWidth /> <br /><br />
            </div>
            
            <div className='modalbox'>
              <Button 
                onClick={handleClose}
                variant='contained'
                size='large'
                fullWidth
                sx= {{
                  backgroundColor:'#292974',
                  fontFamily:'Poppins',
                  marginRight:'10px'
                }}
              >
                Add Student
              </Button>
              <br />
              <Button 
                onClick={handleClose}
                variant='contained'
                size='large'
                fullWidth
                sx= {{
                  backgroundColor:'#292974',
                  fontFamily:'Poppins',

                }}
              >
                Cancel
              </Button>
  
            </div>
        </Box>
        </Modal>
    </div>
  )
}

export function SubjectModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button 
        onClick={handleOpen}
        variant='contained'
        size='large'
        sx= {{
          backgroundColor:'#292974',
          fontFamily:'Poppins',
          marginTop:'10px',
          marginBottom:'20px'
        }}
        >
          Add Subject
        </Button>

        <Modal
        open={open}
        onClose={handleClose}
        >

        <Box sx={{ ...style, 
          width: 350,
          borderRadius:'10px', 
        }}>
            <h2>Add Subject</h2>
            <div className='student_txt'>
            <TextField label="Class Code" margin='dense' fullWidth /> <br />
            <TextField label="Course Number" margin='dense' fullWidth/> <br />
            <TextField label="Subject Description"  margin='dense' fullWidth /> <br />
            <TextField label="Units"  margin='dense' fullWidth /><br />
            <TextField label="Schedule" margin='dense' fullWidth /><br /><br />
            </div>
            
            <div className='modalbox'>
              <Button 
                onClick={handleClose}
                variant='contained'
                size='large'
                fullWidth
                sx= {{
                  backgroundColor:'#292974',
                  fontFamily:'Poppins',
                  marginRight:'10px'
                }}
              >
                Add Subject
              </Button>
              <br />
              <Button 
                onClick={handleClose}
                variant='contained'
                size='large'
                fullWidth
                sx= {{
                  backgroundColor:'#292974',
                  fontFamily:'Poppins',

                }}
              >
                Cancel
              </Button>
  
            </div>
        </Box>
        </Modal>
    </div>
  )
}

