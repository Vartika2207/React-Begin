// import logo from './logo.svg';
// import './App.css';
import Clock from "./components/Clock";
import Welcome from "./components/Welcome";

function App() {
  
  const element = <h1>Hello there from App.js</h1>
  const userInfo = {
    firstname: 'Vartika',
    lastname: 'Shakya'
  }
  return (
    <div>
     <h1>Hello {element}</h1>
     <Welcome user = {userInfo}/>
     <Clock/>
    </div>
  );
}


export default App;
