import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Listings from './components/Listings';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Testing from './components/Testing';
import Register from './components/Register'
import { useImmerReducer } from 'use-immer';
import DispatchContext from './context/DispatchContext';
import StateContext from './context/StateContext';
import { useContext } from 'react';

function App() {

  const initialState = {
    userUsername: '',
    userEmail: '',
    userId: '',
    userToken: '',
    globalMessage: 'hello, this is message can be used by any child compoment'
  };

  function ReducerFunction(draft, action) {

    switch (action.type) {

      case 'catchToken':
        draft.userToken = action.tokenValue;
        break;

      case 'catchUserInfo':
        draft.userUsername = action.usernameInfo
        draft.userEmail = action.emailInfo
        draft.userId = action.IdInfo
        break
        
      default:
      // pass
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

  return (
    <div>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            <CssBaseline />
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/listings' element={<Listings />} />
              <Route path='/testing' element={<Testing />} />
            </Routes>
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>







      {/* <AppleComponent/> */}

      {/* {arrFruits.map((fruit) => {
        return <TestComponent key={fruit.id} name={fruit.name} color={fruit.color} />
      })} */}

    </div>
  );
}

export default App;
