// import React from 'react';
import { withSnackbar } from 'notistack';
// import { MessageErrorArray } from './Messages';

// function SnackbarMessages(props) {
//   console.log('Teste MESSAGE');
//   console.log(props);
//   this.props.enqueueSnackbar('Teste', { variant: 'error' });
//   console.log(props);
//   const data = () => MessageErrorArray();
//   console.log(data);
//   data.map(item => {
//     const { message } = item;
//     this.props.enqueueSnackbar(message, { variant: 'error' });
//   });
// }

// export default withSnackbar(SnackbarMessages);

// const Messages = messages => {
//   const { data } = messages;
//   let msg = '';

//   console.log('ok');

//   return msg;
// };

// export default withSnackbar(Messages);

/*
import React from 'react';

const messages = props => {
  console.log('AAAAAAAAA');
  console.log(props);
  console.log('AAAAAAAAA');
};

const SnackbarMessages = props => {
  return (
    <div>
      <h1>teste</h1>
      {console.log(props)}
      {console.log('1111111111')}
      {messages(props)}
    </div>
  );
};

export default withSnackbar(SnackbarMessages);
*/

import React, { Component } from 'react';

class SnackbarMessages extends Component {
  componentWillMount() {
    console.log('???????????????');
  }

  render() {
    return (
      <div>
        <h1>Teste</h1>
      </div>
    );
  }
}

export default SnackbarMessages;
