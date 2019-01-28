import React, { Component } from 'react';
import ContentHeader from '../../components/ContentHeader';
import api from '../../api';
import { withSnackbar } from 'notistack';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <ContentHeader title={`Bem vindo ${user.name}`} />
      </div>
    );
  }
}

export default withSnackbar(Home);
