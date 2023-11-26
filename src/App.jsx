import {BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Listings from './components/Listings';

// const arrFruits = [
//   {
//     id: 1,
//     name: "Apple",
//     color: "red"
//   },
//   {
//     id: 2,
//     name: "Orange",
//     color: "orange"
//   },
//   {
//     id: 3,
//     name: "Banana",
//     color: "yellow"
//   },
//   {
//     id: 4,
//     name: "Kiwi",
//     color: "green"
//   },
//   {
//     id: 5,
//     name: "Mango",
//     color: "red"
//   },
//   {
//     id: 6,
//     name: "Avocado",
//     color: "green"
//   },
// ]


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/listings' element={<Listings/>}/>
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
