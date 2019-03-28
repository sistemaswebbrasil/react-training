import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from '../contexts/AuthContext';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function About(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <CardMedia
          className={classes.media}
          image="https://images-na.ssl-images-amazon.com/images/I/51MTwFDR8WL._SX425_.jpg"
          title="Treinamento"
        />
        <Typography variant="h4" gutterBottom>
          Projeto de treinamento
        </Typography>

        <Typography variant="body1" gutterBottom>
          Projeto React + Materia-ui + Express + Webpack
        </Typography>
      </CardContent>
    </Card>
  );
}

About.propTypes = {
  classes: PropTypes.shape({})
};

About.defaultProps = {
  classes: 'foo'
};

export default withStyles(styles)(About);
