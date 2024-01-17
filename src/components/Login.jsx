import React, { useContext, useEffect } from 'react'
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useImmerReducer } from 'use-immer';
import axios from 'axios'

//contexts
import DispatchContext from '../context/DispatchContext';
import StateContext from '../context/StateContext';

const myStyle = {
  width: '50%',
  margin: '4rem auto',
  border: '5px solid black',
  padding: '3rem'
}

const lonInBtnStyle = {
  backgroundColor: 'green',
  color: 'white',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: 'blue',
  }
}


function Login() {

  const navigate = useNavigate();

  const GlobalDispatch = useContext(DispatchContext)
  const GlobalState = useContext(StateContext)

  const initialState = {
    usernameValue: '',
    passwordValue: '',
    sendRequest: 0,
    token: ''
  };

  function ReducerFunction(draft, action) {

    switch (action.type) {

      case 'catchUsernameChange':
        draft.usernameValue = action.usernameChosen;
        break;

      case 'catchPasswordChange':
        draft.passwordValue = action.passwordChosen;
        break;

      case 'changeSendRequest':
        draft.sendRequest = draft.sendRequest + 1;  //!draft.sendRequest
        break

      case 'catchToken':
        draft.token = action.tokenValue
        break

      default:
      // pass
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

  function FormSubmit(e) {
    e.preventDefault();
    console.log('the form has been submitted')
    dispatch({ type: 'changeSendRequest' })
  }


  useEffect(() => {

    if (state.sendRequest) {
      const source = axios.CancelToken.source()
      async function SignIn() {
        try {
          const response = await axios.post(
            'http://127.0.0.1:8000/api-auth-djoser/token/login/',

            {
              username: state.usernameValue,
              password: state.passwordValue,
            },
            { cancelToken: source.token });

          console.log(response)
          dispatch({ type: 'catchToken', tokenValue: response.data.auth_token })
          GlobalDispatch({ type: 'catchToken', tokenValue: response.data.auth_token })
          //navigate('/')
        } catch (error) {
          console.log(error)
        }
      }
      SignIn();
      return () => {
        source.cancel()
      }
    }

  }, [state.sendRequest])


  //get user info
  useEffect(() => {

    if (state.token !== '') {
      const source = axios.CancelToken.source()
      async function GerUserInfo() {
        try {
          const response = await axios.get(
            'http://127.0.0.1:8000/api-auth-djoser/users/me/',

            {
              headers: { Authorization: `Token ${state.token}` }
            },
            { cancelToken: source.token });

          console.log(response)
          GlobalDispatch({
            type: 'userSignsIn', 
            usernameInfo: response.data.username,
            emailInfo: response.data.email, 
            IdInfo: response.data.id
          })
          navigate('/');
        } catch (error) {
          console.log(error)
        }
      }
      GerUserInfo();
      return () => {
        source.cancel()
      }
    }

  }, [state.token])



  return (
    <div style={myStyle}>
      <form onSubmit={FormSubmit}>
        <Grid item container style={{ marginTop: '1rem' }} justifyContent={'center'}>
          <Typography variant='h4' style={{ textTransform: 'uppercase' }}>Sign in</Typography>
        </Grid>
        <Grid item container style={{ marginTop: '1rem' }}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            value={state.usernameValue}
            onChange={(e) => dispatch({ type: 'catchUsernameChange', usernameChosen: e.target.value })} />
        </Grid>
        <Grid item container style={{ marginTop: '1rem' }}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            type='password'
            value={state.passwordValue}
            onChange={(e) => dispatch({ type: 'catchPasswordChange', passwordChosen: e.target.value })} />
        </Grid>
        <Grid item container style={{ marginTop: '1rem', marginLeft: "auto", marginRight: 'auto' }} xs={8}>
          <Button variant='contained' fullWidth type='submit' sx={lonInBtnStyle}>SIGN IN</Button>
        </Grid>
      </form>
      <Grid item container style={{ marginTop: '1rem' }} justifyContent={'center'}>
        <Typography variant='small' style={{ marginTop: '1rem' }}>Don't have an account yet? <span onClick={() => navigate('/register')} style={{ cursor: 'pointer', color: 'green' }}>SIGN UP</span> </Typography>
      </Grid>
    </div>
  )
}

export default Login
