import './App.css';
import React, { Component } from 'react';
import { withRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import UserList from './UserList/UserList';
import RegisterUser from './RegisterUser/RegisterUser';
import UserPage from './UserPage/UserPage';

class App extends Component {

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active"> Home </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/person" className="nav-link" activeClassName="active"> Person </NavLink >
                {/* <a class="nav-link" href="#">Features</a> */}
              </li>
              <li class="nav-item">
              <NavLink to="/register_user" className="nav-link" activeClassName="active"> Register User </NavLink >
                {/* <a class="nav-link" href="#">Pricing</a> */}
              </li>

            </ul>
          </div>
        </nav>
        {/* <nav>
          <Link to="/"> Home </Link>
          <Link to="/person"> Person </Link>
          <Link to="/register_user"> Register User </Link>
        </nav> */}
        <Switch>
          <Route exact path="/" component={test} />
          <Route exact path="/person" component={UserList} />
          <Route path="/person/:id" component={UserPage}/>
          <Route path="/register_user" component={RegisterUser} />
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

export default App;
