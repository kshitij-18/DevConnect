
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing } from './components/layout/Landing';
import Navbar from './components/layout/Navbar'
import DevList from './components/layout/DevList'

function App() {
  const [loggedin, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/viewdevs' exact>
            <DevList />
          </Route>
          <Route path='/' exact>
            {loggedin == true ? <h1>Home page</h1> : <Landing />}
          </Route>
          <Route path='/profile/:id' exact>
            {loggedin == true ? <h1>You are seeing profile</h1> : <h1>Login First</h1>}
          </Route>
        </Switch>
      </Router>
    </div>


  );
}

export default App;
