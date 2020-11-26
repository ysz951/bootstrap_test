import './App.css';
import React, { Component } from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import UserList from './UserList/UserList';

class App extends Component {

  render() {
    return (
      <>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/person"> Person </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={test}/>
          <Route path="/person" component={UserList}/>
        </Switch>
      </>
    )
  }
}

function test () {
  return (
    <h1>Hello</h1>
  )
}

export default App;
