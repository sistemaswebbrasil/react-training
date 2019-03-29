import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from '../globe.svg';
import Avatar from '@material-ui/core/Avatar';
import { AuthContext } from '../contexts/AuthContext';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

const handleLogout = () => {
  // this.setState({ open: true });
  // alert('Olá');
};

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <AuthContext.Consumer>
      {({ session ,logOut}) => (
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Avatar alt="Remy Sharp" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item md>
                <Typography gutterBottom variant="subtitle1">
                  {session.user.name}
                </Typography>
                <Typography gutterBottom>{session.user.email}</Typography>
                <Button
                  onClick={handleLogout()}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={logOut}
                >
                  Logout
                  <PowerSettingsNew className={classes.rightIcon} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </AuthContext.Consumer>
  );
}

export default withRoot(withStyles(styles)(ComplexGrid));
