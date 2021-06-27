import './App.css';
import React from 'react';
import Login from './Components/Login.js';
import Welcome from './Components/Welcome.js';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link className="nav-link" to="/sign-in" >Login</Link>
                </li>
              </ul>
            </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/sign-in' component={Login}/>
                <Route exact path='/welcome' component={Welcome}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
