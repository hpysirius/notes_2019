import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Layout from './routes/Layout';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Lay" exact component={Layout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
