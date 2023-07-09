import React from 'react';
import '../App.css'
import { TextField, Button } from '@mui/material';

const EmployeeForm = () => {
  return (
    <div className='App'>
      <h2>Employee Form</h2>
      <form>
        <TextField label="Name" /> 
        <br /><br />
        <TextField label="Designation" />
        <br /><br />
        <TextField label="Location" />
        <br /><br />
        <TextField label="Salary" />
        <br /><br />
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
