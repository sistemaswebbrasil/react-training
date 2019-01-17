import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 1
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
        @sistemaswebbrasil
      </Typography>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.shape({})
};

Footer.defaultProps = {
  classes: 'foo'
};

export default withStyles(styles)(Footer);
