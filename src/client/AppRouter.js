import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About';
import Users from './pages/Users';
import App from './App';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const NoTemplate = props => <div>{props.children}</div>;

const AppRouter = () => (
  <div>
    <Switch>
      <AppRoute exact path="/login" layout={NoTemplate} component={Login} />
      <AppRoute exact path="/" layout={App} component={Home} />
      <AppRoute exact path="/about" layout={App} component={About} />
      <AppRoute exact path="/users" layout={App} component={Users} />
    </Switch>
  </div>
);

export default AppRouter;
