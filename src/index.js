import { h } from 'preact';

import { Provider } from 'react-redux';
import store from 'stores/store';

import { Switch, Route } from 'wouter/preact';

import Landing from 'pages/landing';
import Error from 'pages/error';

import 'assets/css/init.css';

const Router = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/:rest*">
        <Error />
      </Route>
    </Switch>
  </Provider>
);

export default Router;