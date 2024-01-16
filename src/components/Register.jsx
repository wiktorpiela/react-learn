import React, { useEffect, useState } from 'react'
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useImmerReducer } from 'use-immer';

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
  '&:hover': {
    backgroundColor: 'blue',
  }
}

function Register() {

  const navigate = useNavigate();

  const initialState = {
    usernameValue: '', 
    emailValue: '', 
    passwordValue: '', 
    password2Value: '',
    sendRequest: false 
  };

  function ReducerFunction(draft, action) {

    switch (action.type) {
      case 'catchUsernameChange':
        draft.usernameValue = action.usernameChosen;
        break;
      case 'catchEmailChange':
        draft.emailValue = action.emailChosen;
        break;
      case 'catchPasswordChange':
        draft.passwordValue = action.passwordChosen;
        break;
      case 'catchPassword2Change':
        draft.password2Value = action.password2Chosen;
        break;
      case 'changeSendRequest':
        draft.sendRequest = true //!draft.sendRequest
        break

      default:
        // pass
    }

  }

  const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

  useEffect(() => {
    console.log(state.usernameValue)
  }, [state.usernameValue])

  function FormSubmit(e) {
    e.preventDefault();
    console.log('the form has been submitted')
    dispatch({type: 'changeSendRequest'})
    console.log(state.sendRequest)
  }

  useEffect(() => {

    if (state.sendRequest) {
      const source = axios.CancelToken.source()
      async function SignUp() {
        try {
          const response = await axios.post(
            'http://127.0.0.1:8000/api-auth-djoser/users/',

            {
              username: state.usernameValue,
              email: state.emailValue,
              password: state.passwordValue,
              re_password: state.password2Value,
            },
            { cancelToken: source.token });

          console.log(response)
          navigate('/')
        } catch (error) {
          console.log(error)
        }
      }
      SignUp();
      return () => {
        source.cancel()
      }
    }

  }, [state.sendRequest])

  return (
    <div style={myStyle}>
      <form onSubmit={FormSubmit}>
        <Grid item container style={{ marginTop: '1rem' }} justifyContent={'center'}>
          <Typography variant='h4' style={{ textTransform: 'uppercase' }}>Create an account</Typography>
        </Grid>
        <Grid item container style={{ marginTop: '1rem' }}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            value={state.usernameValue}
            onChange={(e) => dispatch({type: 'catchUsernameChange', usernameChosen: e.target.value})} />
        </Grid>
        <Grid item container style={{ marginTop: '1rem' }}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={state.emailValue}
            onChange={(e) => dispatch({type: 'catchEmailChange', emailChosen: e.target.value})} />
        </Grid>
        <Grid item container style={{ marginTop: '1rem' }}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            type='password'
            value={state.passwordValue}
            onChange={(e) => dispatch({type: 'catchPasswordChange', passwordChosen: e.target.value})} />
        </Grid>
        <Grid item container style={{ marginTop: '1rem' }}>
          <TextField
            id="confirm-password"
            label="Confirm password"
            variant="outlined"
            fullWidth
            type='password'
            value={state.password2Value}
            onChange={(e) => dispatch({type: 'catchPassword2Change', password2Chosen: e.target.value})} />
        </Grid>
        <Grid item container style={{ marginTop: '1rem', marginLeft: "auto", marginRight: 'auto' }} xs={8}>
          <Button variant='contained' fullWidth type='submit' sx={regBtnStyle}>SIGN UP</Button>
        </Grid>

      </form>

      <Grid item container style={{ marginTop: '1rem' }} justifyContent={'center'}>
        <Typography variant='small' style={{ marginTop: '1rem' }}>Already have an account? <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: 'green' }}>SIGN IN</span> </Typography>
      </Grid>
    </div>
  )
}

export default Register
