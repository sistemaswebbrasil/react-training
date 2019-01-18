import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About';
import Users from './pages/Users';
import App from './App';
import { validateToken } from './pages/Login/LoginService';
const userKey = '_training_user_key_';

export class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem(userKey))
    };
  }

  onLoginSuccess(user) {
    this.setState({ user });
  }

  componentWillMount() {
    if (this.state.user) {
      validateToken(this.state.user.token).then(valid => {
        if (!valid) {
          this.setState({ user: null });
          this.props.history.push('/login');
        }
      });
    }
  }

  render() {
    const AppRoute = ({ component: Component, layout: Layout, user, onLoginSuccess, ...rest }) => (
      <Route
        {...rest}
        render={props => (
          <div>
            <Layout>
              <Component {...props} {...user} />
            </Layout>
          </div>
        )}
      />
    );

    const LoginTemplate = props => {
      const { children } = props;
      const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { onLoginSuccess: this.onLoginSuccess.bind(this) })
      );
      return <div>{childrenWithProps}</div>;
    };

    const MainTemplate = props => {
      const { children } = props;
      const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { user: this.state.user })
      );
      return <App>{childrenWithProps}</App>;
    };

    const { user } = this.state;

    return (
      <div>
        {user && (
          <Switch>
            <AppRoute exact path="/" layout={MainTemplate} component={Home} user={user} />
            <AppRoute exact path="/about" layout={MainTemplate} component={About} user={user} />
            <AppRoute exact path="/users" layout={MainTemplate} component={Users} user={user} />
          </Switch>
        )}
        {!user && (
          <Login onLoginSuccess={this.onLoginSuccess.bind(this)} />
        // <Switch>
        //   <AppRoute exact path="/login" layout={LoginTemplate} component={Login} user={user} />
        // </Switch>
        )}
      </div>
    );
  }
}

export default AppRouter;
