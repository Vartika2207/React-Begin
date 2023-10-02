// import logo from './logo.svg';
// import './App.css';


function App() {
  function formatUser(user) {
    return (
        user.firstname + " " + user.lastname
    )
  }

  function getGreeting(user) {
    if(user) {
        return <h1>Hello {user.firstname}</h1>
    }
    else {
        return <h1>Hello Customer</h1>
    }
  }

  const element = <h1>Hello there</h1>
  const name = {
    firstname: 'Vartika',
    lastname: 'Shakya'
  }
  return (
    <div>
      <h2>{element}</h2>
      <h3>{formatUser(name)}</h3>
      {getGreeting(name)}
    </div>
  );
}

App();

export default App;
