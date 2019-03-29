import React from 'react';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const FormButton = props => {
  const { classes,title ,variant,color,type } = props;
  return (
    <div className={classes.buttons}>
      <Button variant={variant || "contained"} color={color || "primary"} className={classes.button} type={type || "submit"}>
        {title || "Enviar"}
      </Button>
    </div>
  );
};

export default withStyles(styles)(FormButton);
