import React, { useState } from 'react'
// conditional rendering of components
function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handelLoginClick = () => { setIsLoggedIn(true) };
    const handelLogoutClick = () => { setIsLoggedIn(false) };

    let button;
    if(isLoggedIn) {
        button = <LogoutButton onClick={handelLogoutClick}/>
    }
    else {
        button = <LoginButton onClick={handelLoginClick}/>
    }

  return (
    <div>
        {button}
    </div>
  )
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

export default LoginControl
