import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detail' component={Detail} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
