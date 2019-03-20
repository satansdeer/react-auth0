import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Public from "./Public";
import Private from "./Private";
import Login from "./Login";
import { Nav, NavLink } from "./Components";

class App extends Component {
  render() {
    return (
      <>
        <Nav>
          <NavLink to="/public" component={NavLink}>
            Public
          </NavLink>
          <NavLink to="/private">Private</NavLink>
        </Nav>

        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <Route path="/private" component={Private} />
          <Redirect to="/public"/>
        </Switch>
      </>
    );
  }
}

export default App;
