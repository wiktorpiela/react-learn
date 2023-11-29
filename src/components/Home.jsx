import React, { useState } from 'react'
import { Button, Typography, AppBar, Toolbar } from '@mui/material';



function Home() {

  const leftNavStyle = {
    marginRight: 'auto'
  }

  const rightNavStyle = {
    marginLeft: 'auto',
    marginRight: "10rem"
  }

  const propertyBtn = {
    backgroundColor: 'green',
    color: 'white',
    width: '15rem',
    fontSize: '1.1rem',
    marginRight: '1rem',
    '&:hover':{
      backgroundColor: 'blue'
    }
  }

  const loginBtn = {
    backgroundColor: 'white',
    color: 'black',
    width: '15rem',
    fontSize: '1.1rem',
    marginLeft: '1rem',
    '&:hover':{
      backgroundColor: 'green'
    }
  }


  return (
    <>
      <AppBar position="static" style={{backgroundColor: 'black'}}>
        <Toolbar>
          <div className={leftNavStyle}>
            <Button color="inherit"><Typography variant='h4'>LBREP</Typography></Button>
          </div>
          <div>
            <Button color="inherit">
              <Typography variant='h6' sx={{marginRight: '2rem'}}>Listings</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant='h6' sx={{marginLeft: '2rem'}}>Agencies</Typography>
            </Button>
          </div>
          <div className={rightNavStyle}>
            <Button color="inherit" sx={propertyBtn}>Add property</Button>
            <Button color="inherit" sx={loginBtn}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>

  )
}

export default Home
