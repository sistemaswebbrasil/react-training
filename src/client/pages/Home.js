import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Home extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>

        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}
