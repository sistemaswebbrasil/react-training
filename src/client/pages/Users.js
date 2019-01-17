import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Users extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    return <div>
      <Typography variant="h4" gutterBottom component="h2">
        Usuários
        </Typography>
      <div>teste</div>
    </div>;
  }
}

export default Users;
