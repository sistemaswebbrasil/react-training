import React from 'react';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

const FormSectionButtons = props => {
  const { classes } = props;
  return (
    <div className={classes.buttons}>
      {props.children}
    </div>
  );
};

export default withStyles(styles)(FormSectionButtons);
