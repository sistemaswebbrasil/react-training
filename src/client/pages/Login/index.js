import React, { Component } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Paper,
  Input,
  IconButton,
  InputAdornment,
  Typography,
  withStyles,
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  CircularProgress
} from '@material-ui/core';
import { withRouter } from 'react-router';

import api from '../../services/api';
import { login, isAuthenticated } from '../../services/auth';
import withSnackbarMessages from '../../components/withSnackbarMessages';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      fields: { email: '', password: '' },
      showPassword: false,
      hasErrors: false,
      loading: false
    };
  }

  onInputChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    });
  }

  onFormSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const response = await api.post('login', this.state.fields);
      login(response.data);
      this.props.history.push('/');
    } catch (e) {
      console.log(e);
      this.setState({ hasErrors: true });
      this.props.errorMessage(e);
      this.setState({ loading: false });
    }
  };

  componentWillMount() {
    if (isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { email, password } = this.state.fields;
    const { showPassword, hasErrors, loading } = this.state;
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onChange={this.onInputChange.bind(this)}
            onSubmit={this.onFormSubmit.bind(this)}
          >
            <FormControl margin="normal" required fullWidth error={hasErrors}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="new-email"
                value={email}
                error={hasErrors}
                disabled={loading}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth error={hasErrors}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="new-password"
                value={password}
                error={hasErrors}
                disabled={loading}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
            >
              Sign in
            </Button>
          </form>
          {loading && <CircularProgress className={classes.progress} />}
        </Paper>
      </main>
    );
  }
}

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

export default withSnackbarMessages(withRouter(withStyles(styles)(Login)));
