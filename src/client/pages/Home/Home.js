import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import { AuthContext } from '../../contexts/AuthContext';

const Home = () => {
  return (
    <AuthContext.Consumer>
      {({ session }) => (
        <div>
          {session.user.name && <ContentHeader title={`Bem vindo ${session.user.name}`} />}
          <h1>Teste</h1>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default Home;
