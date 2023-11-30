import React, { useState } from 'react'
import { Button, Typography, AppBar, Toolbar } from '@mui/material';
import city from './assets/Prison_Break_205.webp'

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

  const cityImg = {
    width: '100%',
    height: '92vh'
  }

  const overlatText = {
    position: 'absolute',
    zIndex: '100',
    top: '100px',
    left: '20px',
    textAlign: 'center'
  }

  const homeBtn = {
    fontSize: '3.5rem',
    borderRadius: '15px',
    backgroundColor: 'green',
    marginTop: '2rem',
    boxShadow: '3px 3px 3px white'
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
      <div style={{position: 'relative'}}>
        <img src={city} alt="pic" style={cityImg}/>
        <div style={overlatText}>
          <Typography variant='h1' sx={{color:'white', fontWeight:'bolder', textTransform:'uppercase', userSelect:'none'}}>
            Find your <span style={{color:'green'}}>next property</span> on the LBPREP website 
          </Typography>
          <Button variant='contained' sx={homeBtn}>SEE ALL PROPERTIES</Button>
        </div>
      </div>
    </>
  )
}

export default Home
