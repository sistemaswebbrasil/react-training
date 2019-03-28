import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import { withSnackbar } from 'notistack';
import { AuthContext } from '../../contexts/AuthContext';

const Home = () => {
  return (
  <AuthContext.Consumer>
    {({session}) => (
      <ContentHeader title={`Bem vindo ${session.user.name}`} />
    )}
  </AuthContext.Consumer>
  )
}

export default withSnackbar(Home);
