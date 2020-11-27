import './App.css';
import React, { Component } from 'react';
import { withRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import UserList from './UserList/UserList';
import RegisterUser from './RegisterUser/RegisterUser';
import UserPage from './UserPage/UserPage';
import LicenseList from './LicenseList/LicenseList';

class App extends Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active"> Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/person" className="nav-link" activeClassName="active"> Person </NavLink >
              </li>
              <li className="nav-item">
                <NavLink to="/register_user" className="nav-link" activeClassName="active"> Register User </NavLink >
              </li>
              <li className="nav-item">
                <NavLink to="/license" className="nav-link" activeClassName="active"> License </NavLink >
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={test} />
          <Route exact path="/person" component={UserList} />
          <Route path="/person/:id" component={UserPage}/>
          <Route path="/register_user" component={RegisterUser} />
          <Route exact path="/license" component={LicenseList} />
          <Route component={NotFoundPage} />  
        </Switch>
      </>
    )
  }
}

function test() {
  return (
    <h1>Hello</h1>
  )
}

function NotFoundPage() {
  return (
    <h1>Not Found</h1>
  )
}

export default App;
