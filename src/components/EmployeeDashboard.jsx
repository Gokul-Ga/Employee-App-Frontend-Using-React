import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import '../App.css'

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setEmployees(response.data);
        })
        .catch(error => {
          console.error('Error fetching employee data:', error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <h2>Employee Dashboard</h2>
      <Table className='App' style={{ border: 'solid 5px gray' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: '20px', fontWeight: 'bolder' }}>ID</TableCell>
            <TableCell style={{ fontSize: '20px', fontWeight: 'bolder' }}>Name</TableCell>
            <TableCell style={{ fontSize: '20px', fontWeight: 'bolder' }}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(employee => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeeDashboard;
