import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('logintoken');
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar style={{backgroundColor:'purple',marginLeft:'0px'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Link to={'/blogs'}><Button style={{color:'white'}}>Home</Button></Link>
          <Link to={'/addblog'}><Button style={{color:'white'}}>Add Blog</Button></Link>
          <Button style={{color:'white'}} onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar