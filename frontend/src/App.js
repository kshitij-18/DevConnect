
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing } from './components/layout/Landing';
import DevList from './components/layout/DevList'
import Login from './components/auth/Login';
import Register from './components/auth/Register'
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import setAuthToken from './utils/setAuthToken'
import Dashboard from './components/dashboard/Dashboard'
import { loadUser } from './actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import ProtectedRoute from './components/routing/ProtectedRoute'
import CreateProfile from './components/Profile-Form/CreateProfile';
import EditProfile from './components/Profile-Form/EditProfile';
import AddExperience from './components/Profile-Form/AddExperience';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'))
}
function App() {


  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(loadUser())
  }, [])
  const { isAuth, loading } = authState
  console.log(isAuth)
  return (
    <div className="App">
      <Router>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Navbar />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/viewdevs' component={DevList}></Route>
            <ProtectedRoute exact path='/dashboard' component={Dashboard} isAuth={isAuth} loading={loading}></ProtectedRoute>
            <ProtectedRoute exact path='/create-profile' component={CreateProfile} isAuth={isAuth} loading={loading}></ProtectedRoute>
            <ProtectedRoute exact path='/edit-profile' component={EditProfile} isAuth={isAuth} loading={loading}></ProtectedRoute>
            <ProtectedRoute exact path='/add-experience' component={AddExperience} isAuth={isAuth} loading={loading}></ProtectedRoute>
          </Switch>

        </section>
      </Router>
    </div>


  );
}

export default App;
