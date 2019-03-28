import React from 'react'

export const session = {
  user: {
    name: null,
    email: null,
    logged: false,
  }
};

export const AuthContext = React.createContext({
  session: session
});
