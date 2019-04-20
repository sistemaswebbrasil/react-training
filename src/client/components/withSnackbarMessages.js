import React from 'react';
import { withSnackbar } from 'notistack';
import { MessageErrorArray } from './Messages';

const withSnackbarMessages = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.handleErrorMessage = this.handleErrorMessage.bind(this);
      this.handleSuccessMessage = this.handleSuccessMessage.bind(this);
      this.handleErrorMessageFromArray = this.handleErrorMessageFromArray.bind(this);
    }

    handleErrorMessage(e) {
      MessageErrorArray(e).map(item => {
        return this.props.enqueueSnackbar(item.message, { variant: 'error' });
      });
    }

    handleErrorMessageFromArray(errors) {
      errors.map(item => {
        console.log(item.message);
        return this.props.enqueueSnackbar(item.message, { variant: 'error' });
      });
    }

    handleSuccessMessage(msg) {
      this.props.enqueueSnackbar(msg);
    }

    render() {
      return (
        <WrappedComponent
          errorMessage={this.handleErrorMessage}
          errorMessageFromArray={this.handleErrorMessageFromArray}
          successMessage={this.handleSuccessMessage}
        />
      );
    }
  }

  return withSnackbar(HOC);
};

export default withSnackbarMessages;
