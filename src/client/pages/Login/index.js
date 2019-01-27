import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { login } from './LoginService';
import { withSnackbar } from 'notistack';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      fields: {
        email: 'adriano.faria@gmail.com',
        password: ''
      },
      showPassword: false,
      errors: null
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

  onFormSubmit(evt) {
    evt.preventDefault();
    login(this.state.fields)
      .then(resp => {
        if (resp.token) {
          console.log('ok??');
          this.props.onLoginSuccess(resp);
        } else {
          console.log('Erro como resposta');
        }
      })

      .catch(e => {
        this.setState({ errors: e });
        if (e !== undefined) {
          this.props.enqueueSnackbar(e.data.errors, { variant: 'error' });
        }
      });
  }

  componentWillMount() {
    if (this.props.user) {
      this.props.history.push('/');
    }
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { email, password } = this.state.fields;
    const { showPassword, errors } = this.state;
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
            <FormControl
              margin="normal"
              required
              fullWidth
              error={errors ? errors.status == 401 : false}
            >
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                error={errors ? errors.status == 401 : false}
                autoFocus
              />
            </FormControl>
            <FormControl
              margin="normal"
              required
              fullWidth
              error={errors ? errors.status == 401 : false}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                error={errors ? errors.status == 401 : false}
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
            >
              Sign in
            </Button>
          </form>
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
  }
});

export default withStyles(styles)(withSnackbar(Login));
