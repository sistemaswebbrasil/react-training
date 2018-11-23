import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          @sistemaswebbrasil
        </Typography>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.shape({})
};

Footer.defaultProps = {
  classes: 'foo'
};

export default withStyles(styles)(Footer);
