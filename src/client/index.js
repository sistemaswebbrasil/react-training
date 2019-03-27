import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AppRouter from './AppRouter';

ReactDOM.render(
  <HashRouter>
    <SnackbarProvider
      key={1}
      maxSnack={3}
      action={
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <AppRouter />
    </SnackbarProvider>
  </HashRouter>,
  document.getElementById('root')
);
