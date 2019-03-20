import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Public from "./Public";
import Private from "./Private";
import Callback from "./Callback";
import Login from "./Login";
import { AuthProvider } from "./Auth";
import { PrivateRoute } from "./PrivateRoute";
import { Nav, NavLink } from "./Components";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Nav>
          <NavLink to="/" component={NavLink}>
            Public
          </NavLink>
          <NavLink to="/private">Private</NavLink>
        </Nav>

        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/callback" component={Callback} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <Redirect to="/public" />
        </Switch>
      </AuthProvider>
    );
  }
}

export default App;
