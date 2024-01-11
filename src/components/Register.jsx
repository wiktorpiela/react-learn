import React from 'react'
import {TextField, Grid, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const myStyle = {
    width: '50%',
    margin: '4rem auto',
    border: '5px solid black',
    padding: '3rem'
}

const regBtnStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontSize: '1.1rem',
    '&:hover':{
        backgroundColor: 'blue',
    }  
}

function Register() {

const navigate = useNavigate();

  return (
    <div style={myStyle}>
      <form>
        <Grid item container style={{marginTop: '1rem'}} justifyContent={'center'}>
            <Typography variant='h4' style={{textTransform: 'uppercase'}}>Create an account</Typography>
        </Grid>
        <Grid item container style={{marginTop: '1rem'}}>
            <TextField id="username" label="Username" variant="outlined" fullWidth/>
        </Grid>
        <Grid item container style={{marginTop: '1rem'}}>
            <TextField id="email" label="Email" variant="outlined" fullWidth/>
        </Grid>
        <Grid item container style={{marginTop: '1rem'}}>
            <TextField id="password" label="Password" variant="outlined" fullWidth type='password'/>
        </Grid>
        <Grid item container style={{marginTop: '1rem'}}>
            <TextField id="confirm-password" label="Confirm password" variant="outlined" fullWidth type='password'/>
        </Grid>
        <Grid item container style={{marginTop: '1rem', marginLeft:"auto", marginRight:'auto'}} xs={8}>
            <Button variant='contained' fullWidth type='submit' sx={regBtnStyle}>SIGN UP</Button>
        </Grid>

      </form>

    <Grid item container style={{marginTop: '1rem'}} justifyContent={'center'}>
        <Typography variant='small' style={{marginTop: '1rem'}}>Already have an account? <span onClick={()=>navigate('/login')} style={{cursor:'pointer', color:'green'}}>SIGN IN</span> </Typography>
    </Grid>
    </div>
  )
}

export default Register
