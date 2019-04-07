import React, { Component } from 'react';
import { withSnackbar } from 'notistack';
import { MessageErrorArray } from './Messages';

class SnackbarMessages extends Component {
  componentWillMount() {
    this.handleMessages(this.props);
  }

  handleMessages({ error, success }) {
    if (error) {
      MessageErrorArray(error).map(item => {
        this.props.enqueueSnackbar(item.message, { variant: 'error' });
      });
    }
    if (success) {
      this.props.enqueueSnackbar(success);
    }
  }

  componentWillReceiveProps(props) {
    this.handleMessages(props);
  }

  render() {
    return <div />;
  }
}

export default withSnackbar(SnackbarMessages);
