import React, { Component ,Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import About from './pages/About';
import Users from './pages/User';
import UserForm from './pages/User/UserForm';
import App from './App';
import { validateToken } from './pages/Login/LoginService';
import { withRouter } from 'react-router-dom';
import withRoot from './withRoot';
import { AuthContext,session} from './contexts/AuthContext'
import { getToken,logout } from './services/auth';

const userKey = '_training_user_key_';

export class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);

    this.state = {
      user: null,
      session: session,
      logOut: this.logOut,
    };
  }

  onLoginSuccess(resp) {
    this.setState({ session: {"user":{"name":resp.user.username,"email":resp.user.email,"logged":true}} });
  }

  logOut() {
    this.setState({ session: {"user":{"name":null,"email":null,"logged":false}} });
    logout();
    console.log("sai")
    this.props.history.push('/login');
  }

  componentWillMount() {
    if (localStorage.getItem(userKey)) {
      const { user, token } = JSON.parse(localStorage.getItem(userKey));
      validateToken(token)
        .then(() => {
          this.setState({ user: user });
          this.setState({ session: {"user":{"name":user.username,"email":user.email,"logged":true}} });
        })
        .catch(() => {
          this.setState({ session: {"user":{"name":null,"email":null,"logged":false}} });
          this.props.history.push('/login');
        });
    }
  }

  render() {
    const { session } = this.state;
    const AppRoute = ({ component: Component, layout: Layout, user, onLoginSuccess, ...rest }) => (

      <Fragment>
          <Route
            {...rest}
            render={props => (
              <div>
                <Layout>
                  <Component {...props} user={user} />
                </Layout>
              </div>
            )}
          />
      </Fragment>
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
      return (
        <App user={this.state.user} logout={this.logOut}>
          {childrenWithProps}
        </App>
      );
    };

    const { user } = this.state;

    return (
      <div>

        <AuthContext.Provider value={this.state}>

          {session.user.logged && (
            <Switch>
              <AppRoute exact path="/" layout={MainTemplate} component={Home} user={user} />
              <AppRoute exact path="/about" layout={MainTemplate} component={About} user={user} />
              <AppRoute exact path="/users" layout={MainTemplate} component={Users} user={user} />
              <AppRoute
                exact
                path="/users/create"
                layout={MainTemplate}
                component={UserForm}
              />
              <AppRoute
                exact
                path="/users/:id/edit"
                layout={MainTemplate}
                component={UserForm}
              />
              <AppRoute exact path="/login" layout={LoginTemplate} component={Login} user={user} />
            </Switch>
          )}
          {!session.user.logged && <Login onLoginSuccess={this.onLoginSuccess.bind(this)} />}


        </AuthContext.Provider>



      </div>
    );
  }
}

// export default withRouter(AppRouter);
export default withRouter(withRoot(AppRouter));
