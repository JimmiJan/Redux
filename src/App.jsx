import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import {} from "react-dedux"
import { useSelector,useDispatch } from 'react-redux';
 import{counterminus, counterplusAction}from "./Store/action/counterAction.js"
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
//   const dispatch =useDispatch()
//   // const [counter,setCounter]=useState(0)
//   const state = useSelector((store)=> store.CounterReducer)
// const Sum =()=>{
//   // setCounter(counter-1)

//   dispatch(counterminus())
// }
// const Add =()=>{
//   dispatch(counterplusAction("jamsheds"));
// }


  return (
    <div >
            {/* <div>
              <button  onClick={Sum}>-</button>
              <span>{state}</span>
              <button onClick={Add}>+</button>
            </div> */}



            {/* <div>
              <button  onClick={Sum}>-</button>
              <span>{state}</span>
              <button onClick={Add}>+</button>
            </div> */}


          <Login />
          {/* <Dashboard /> */}

</div>
  );
}

export default App;
