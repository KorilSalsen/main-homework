import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AuthPage from '../AuthPage';

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={AuthPage} />
        <Redirect to="/login" />
      </Switch>
    )
  }
}