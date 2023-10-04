// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Clock from "./components/Clock";
import Welcome from "./components/Welcome";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";

function App() {
  const [flag, setFlag] = useState(false);
  const [loginControl, setLoginControl] = useState(false);

  const element = <h1>Hello there from App.js</h1>;
  const userInfo = {
    firstname: "Vartika",
    lastname: "Shakya",
  };

  const postsData = [
    {
      id: 1,
      title: "React",
      content: "JS framework",
    },
    {
      id: 2,
      title: "Vue",
      content: "JS framework",
    },
    {
      id: 3,
      title: "Angular",
      content: "JS framework",
    },
    {
      id: 4,
      title: "React native",
      content: "JS mobile app framework",
    },
  ];

  const toggle = () => {
    console.log("toggle clicked");
    setFlag((initial) => !initial);
  };

  const loginControlClicked = () => {
    setLoginControl((loginControl) => !loginControl);
  };

  return (
    <div>
      {/* below line can also be executed as onClick={() => setFlag(flag=>!flag)} */}
      {/* <button onClick={toggle}>Toggle Clock Component</button>  */}
      {/* <h1>Hello {element}</h1>
     <Welcome user = {userInfo}/> */}
      {/* {flag ? <Clock/> : " Sorry no clock component"} */}

      <LoginControl xyz={loginControlClicked} />
      {loginControl ? <h1>hello</h1> : "bye bye"}
      {loginControl ? <Blog posts={postsData}/> : " "}
    </div>
  );
}

export default App;
