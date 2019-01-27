import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import api from '../../api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      credit: 0,
      debt: 0
    };
  }

  componentDidMount() {
    api.get('/users').then(resp => this.setState({ users: resp.data }));
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Testando
        </Typography>
        <div>Usuário logado: {this.props.user.name || ''}</div>

        <Typography variant="h6" gutterBottom component="h2">
          Usuários:
        </Typography>
        <ul>
          {users &&
            users.map(function(value, index) {
              return <li key={index}>{value.name}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default Home;
