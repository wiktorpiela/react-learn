import {BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import AppleComponent from './components/AppleComponent';

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
          <Route path='/' element={<h1>This is homepage</h1>}/>
          <Route path='/login' element={<h1>This is login page</h1>}/>
          <Route path='/listings' element={<h1>This is property listings page</h1>}/>
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
