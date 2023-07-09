
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx= {{ backgroundColor:'royalblue'}} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,}}>
          Employee App
        </Typography>
        <Button component={Link} to="/" color='inherit' sx={{ backgroundColor:'navy'}}>Employee Dashboard</Button> 
        <Button component={Link} to="/employee-form" color="inherit" sx={{ backgroundColor:'navy',marginLeft:'10px'}}>Employee Form</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
