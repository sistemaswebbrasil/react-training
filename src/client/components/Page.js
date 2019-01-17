import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

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

const Page = props => {
  return (
    <div>
      <Card className={props.classes.card}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Page);
