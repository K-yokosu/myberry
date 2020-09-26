import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../css/app.scss';
import { Top } from './pages/top';
import { Login } from './pages/login';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
