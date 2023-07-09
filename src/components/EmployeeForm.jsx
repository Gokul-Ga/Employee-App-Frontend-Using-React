import React from 'react';
import { TextField, Button } from '@mui/material';

const EmployeeForm = () => {
  return (
    <div>
      <h2>Employee Form</h2>
      <form>
        <TextField label="Name" />
        <TextField label="Designation" />
        <TextField label="Location" />
        <TextField label="Salary" />
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
