import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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

class Home extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { classes } = this.props;
    const { username } = this.state;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {username ? <p>{`Hello ${username}`}</p> : <p>Loading.. please wait!</p>}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.shape({})
};

Home.defaultProps = {
  classes: 'foo'
};

export default withStyles(styles)(Home);
