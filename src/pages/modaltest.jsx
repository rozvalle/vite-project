import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";

export default function AddStudentModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Button to open the modal */}
      <Button
        variant="contained"
        size="large"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#292974",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        Add Student
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {/* Title */}
          <h1>Add Student</h1>

          {/* TextFields */}
          <TextField label="ID Number" margin="dense" fullWidth /> <br />
          <TextField label="First Name" margin="dense" fullWidth /> <br />
          <TextField label="Last Name" margin="dense" fullWidth /> <br />
          <TextField label="Middle Name" margin="dense" fullWidth /> <br />
          <TextField label="Course" margin="dense" fullWidth /> <br />
          <TextField label="Year" margin="dense" fullWidth sx= {{ marginBottom: '10px'}} /> <br />

          {/* Submit Button */}
          <div className="modalbox"> 
            <Button
                variant="contained"
                sx={{
                backgroundColor: "#292974",
                color: "white",
                fontFamily: "Poppins",
                width: '150px',
                marginRight: "10px", // Adds spacing between buttons
                }}
                onClick={handleClose}
            >
                ADD STUDENT
            </Button>

            <Button
                variant="contained"
                sx={{
                backgroundColor: "#292974",
                color: "white",
                fontFamily: "Poppins",
                width: '150px',
                alignItems: 'right',
                }}
                onClick={handleClose}
            >
                Cancel
            </Button>
        </div>
         
        </Box>
      </Modal>
    </div>
  );
}