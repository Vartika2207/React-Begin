// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Clock from "./components/Clock";
import Welcome from "./components/Welcome";
import LoginControl from "./components/LoginControl";


function App() {

  const [flag, setFlag] = useState(false);
  
  const element = <h1>Hello there from App.js</h1>
  const userInfo = {
    firstname: 'Vartika',
    lastname: 'Shakya'
  };

  const toggle = () => {
    console.log("toggle clicked");
    setFlag(initial => !initial);
  }
  return (
    <div>
      {/* below line can also be executed as onClick={() => setFlag(flag=>!flag)} */}
      <button onClick={toggle}>Toggle Clock Component</button> 
     {/* <h1>Hello {element}</h1>
     <Welcome user = {userInfo}/> */}
     {flag ? <Clock/> : " Sorry no clock component"}

     <LoginControl/>
    </div>
  );
}


export default App;
