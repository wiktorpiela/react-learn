import {BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Listings from './components/Listings';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Testing from './components/Testing';
import Register from './components/Register'

function App() {
  return (
    <div>
      <BrowserRouter>
      <CssBaseline/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/listings' element={<Listings/>}/>
          <Route path='/testing' element={<Testing/>}/>
        </Routes>
      </BrowserRouter>







      {/* <AppleComponent/> */}

      {/* {arrFruits.map((fruit) => {
        return <TestComponent key={fruit.id} name={fruit.name} color={fruit.color} />
      })} */}
      
    </div>
  );
}

export default App;
