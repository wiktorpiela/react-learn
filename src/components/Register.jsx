import React, {useEffect, useState} from 'react'
import {TextField, Grid, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

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

const [sendRequest, setSendRequest] = useState(false);
const [usernameValue, setUsernameValue] = useState('');
const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [password2Value, setPassword2Value] = useState('');

useEffect(()=>{
  console.log(usernameValue)
},[usernameValue])

function FormSubmit(e){
    e.preventDefault();
    console.log('the form has been submitted')
    setSendRequest(!sendRequest)
}

useEffect(() => {

    if (sendRequest){
        const source = axios.CancelToken.source()
        async function SignUp() {
          try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api-auth-djoser/users/', 
    
                {
                    username: usernameValue,
                    email: emailValue,
                    password: passwordValue,
                    re_password: password2Value,
                }, 
                {cancelToken: source.token});
                console.log(response)
    
          } catch (error) {
            console.log(error)
          }
        }
        SignUp();
        return ()=>{
          source.cancel()
        }
    }

  }, [sendRequest])

  return (
    <div style={myStyle}>
      <form onSubmit={FormSubmit}>
        <Grid item container style={{marginTop: '1rem'}} justifyContent={'center'}>
            <Typography variant='h4' style={{textTransform: 'uppercase'}}>Create an account</Typography>
        </Grid>
        <Grid item container style={{marginTop: '1rem'}}>
            <TextField 
              id="username" 
              label="Username" 
              variant="outlined" 
              fullWidth 
              value={usernameValue} 
              onChange={(e)=>setUsernameValue(e.target.value)}/>
        </Grid>
        <Grid item container style={{marginTop: '1rem'}}>
            <TextField 
              id="email" 
              label="Email" 
              variant="outlined" 
              fullWidth
              value={emailValue}
              onChange={(e)=>setEmailValue(e.target.value)}/>
        </Grid>
        <Grid item container style={{marginTop: '1rem'}}>
            <TextField 
              id="password" 
              label="Password" 
              variant="outlined" 
              fullWidth 
              type='password'
              value={passwordValue}
              onChange={(e)=>setPasswordValue(e.target.value)}/>
        </Grid>
        <Grid item container style={{marginTop: '1rem'}}>
            <TextField 
              id="confirm-password" 
              label="Confirm password" 
              variant="outlined" 
              fullWidth 
              type='password'
              value={password2Value}
              onChange={(e)=>setPassword2Value(e.target.value)}/>
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
