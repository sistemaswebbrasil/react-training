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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
      <AuthContext.Consumer>
                    {({session}) => (
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {/* <img className={classes.img} alt="complex" src={logo} /> */}
              <Avatar
          alt="Remy Sharp"
          src={logo}
          style={{ background: 'white' }}
        />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {session.user.name}
                </Typography>
                <Typography gutterBottom>{session.user.email}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        )}
        </AuthContext.Consumer>
  );
}

export default withStyles(styles)(ComplexGrid);
