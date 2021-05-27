
import { useState } from 'react';
import './App.css';
import { Landing } from './components/layout/Landing';
import Navbar from './components/layout/Navbar'

function App() {
  const [loggedin, setLoggedIn] = useState(false)
  return (
    <div className="App">
      {
        loggedin == true ? <Navbar /> : <Landing />
      }
    </div>


  );
}

export default App;
