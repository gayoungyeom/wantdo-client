import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
