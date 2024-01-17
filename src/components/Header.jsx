import React, { useContext, useState } from 'react'
import { Button, Typography, AppBar, Toolbar, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import StateConText from "../context/StateContext";

const propertyBtn = {
  backgroundColor: 'green',
  color: 'white',
  width: '15rem',
  fontSize: '1.1rem',
  marginRight: '1rem',
  '&:hover': {
    backgroundColor: 'blue'
  }
}
const loginBtn = {
  backgroundColor: 'white',
  color: 'black',
  width: '15rem',
  fontSize: '1.1rem',
  marginLeft: '1rem',
  '&:hover': {
    backgroundColor: 'green'
  }
}

const profileBtn = {
  color: 'black',
  backgroundColor: 'green',
  width: '15rem',
  fontWeight: 'bolder',
  borderRadius: '15px',
  marginBottom: '0.25rem'
}

const logoutBtn = {
  color: 'black',
  backgroundColor: 'red',
  width: '15rem',
  fontWeight: 'bolder',
  borderRadius: '15px'
}

function Header() {

  const navigate = useNavigate();
  const GlobalState = useContext(StateConText);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Button color="inherit" onClick={() => navigate('/')}><Typography variant='h4'>LBREP</Typography></Button>
        </div>
        <div>
          <Button color="inherit" sx={{ marginRight: '2rem' }} onClick={() => navigate('/listings')}>
            <Typography variant='h6'>Listings</Typography>
          </Button>
          <Button color="inherit" sx={{ marginLeft: '2rem' }} onClick={() => navigate('/')}>
            <Typography variant='h6'>Agencies</Typography>
          </Button>
        </div>
        <div>
          <Button color="inherit" sx={propertyBtn}>Add property</Button>

          {GlobalState.userIsLogged ?
            <Button color="inherit" sx={loginBtn} onClick={handleClick}>{GlobalState.userUsername}</Button> : <Button color="inherit" sx={loginBtn} onClick={() => navigate('/login')}>Login</Button>}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem style={profileBtn} onClick={handleClose}>Profile</MenuItem>
            <MenuItem style={logoutBtn} onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
