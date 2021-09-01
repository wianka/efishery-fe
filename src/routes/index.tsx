import React, { FC } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;