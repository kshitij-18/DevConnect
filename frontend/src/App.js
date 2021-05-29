
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing } from './components/layout/Landing';
import DevList from './components/layout/DevList'
import Login from './components/auth/Login';
import Register from './components/auth/Register'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [loggedin, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path='/' exact>
            {loggedin == true ? <h1>Home page</h1> : <Landing />}
          </Route>
          <Switch>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/viewdevs' component={DevList}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>


  );
}

export default App;
