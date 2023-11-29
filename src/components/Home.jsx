import React, { useState } from 'react'
import { Button, Typography, AppBar, Toolbar } from '@mui/material';

function Home() {



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
      <AppBar position="static" sx={{backgroundColor: 'black'}}>
        <Toolbar 
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
          <div>
            <Button color="inherit"><Typography variant='h4'>LBREP</Typography></Button>
          </div>
          <div>
            <Button color="inherit" sx={{marginRight:'2rem'}}>
              <Typography variant='h6'>Listings</Typography>
            </Button>
            <Button color="inherit" sx={{marginLeft:'2rem'}}>
              <Typography variant='h6'>Agencies</Typography>
            </Button>
          </div>
          <div>
            <Button color="inherit" sx={propertyBtn}>Add property</Button>
            <Button color="inherit" sx={loginBtn}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>

  )
}

export default Home
