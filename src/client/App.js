import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import Header from './components/Header';
import './app.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBotton: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function App(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header />
          </div>
          <div className="main">
            <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <AppRouter />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.shape({})
};

App.defaultProps = {
  classes: 'foo'
};

export default withStyles(styles)(App);
