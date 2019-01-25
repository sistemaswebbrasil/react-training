import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from './components/Footer';
import Header from './components/Header';
import withRoot from './withRoot';
import './app.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBotton: theme.spacing.unit * 2
  }
});

function App(props) {
  const { classes,user } = props;
  return <div className="App Site">
      <div className="Site-content">
        <div className="App-header">
          <Header user={user} />
        </div>
        <div className="main">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                {props.children}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
}

export default withRoot(withStyles(styles)(App));
