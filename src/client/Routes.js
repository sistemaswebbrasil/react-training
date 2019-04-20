import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login';
import About from './pages/About';
import Users from './pages/User';
import UserForm from './pages/User/UserForm';
import App from './App';
import { isAuthenticated, validateToken, logout } from './services/auth';
import { AuthContext, session } from './contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <App>
            <Component {...props} />
          </App>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: session,
      logOut: this.logOut
    };
  }

  async componentDidMount() {
    try {
      const response = await validateToken();
      this.setState({
        session: { user: { name: response.username, email: response.email, logged: true } }
      });
    } catch (error) {
      this.setState({ session: session });
      logout();
      this.props.history.push('/login');
    }
  }

  logOut = () => {
    logout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute path="/users/create" component={UserForm} />
          <PrivateRoute path="/users/:id/edit" component={UserForm} />
        </Switch>
      </AuthContext.Provider>
    );
  }
}

export default withRouter(Routes);
