import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import api from '../../services/api';
import Table from './Table';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withSnackbar } from 'notistack';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], open: false, id: null };
    this.handleDialog = this.handleDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    api
      .get('/users')
      .then(resp => {
        this.setState({ users: resp.data });
      })
      .catch(e => {
        this.setState({ errors: e });
        if (e !== undefined) {
          this.props.enqueueSnackbar(e.data.errors, { variant: 'error' });
        }
      });
  }

  handleDialog(id) {
    this.setState({ open: true });
    this.setState({ id });
  }

  handleDelete() {
    const { id, users } = this.state;
    api
      .delete(`/users/${id}`)
      .then(() => {
        this.handleClose();
        this.props.enqueueSnackbar('Registro excluído');
        this.setState({ users: users.filter(item => item.id != id) });
      })
      .catch(e => {
        this.setState({ errors: e });
        if (e !== undefined) {
          this.props.enqueueSnackbar('Erro', { variant: 'error' });
        }
      });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { users, open } = this.state;
    return (
      <div>
        <ContentHeader title={`Usuários`} />
        <Fab size="small" color="secondary" color="primary" aria-label="Add">
          <ButtonBase component={Link} to="/users/create">
            <AddIcon />
          </ButtonBase>

          <Dialog
            open={open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{'Excluir o registro?'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Esta operação não pode ser desfeita
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleDelete} color="primary">
                Excluir
              </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </Fab>
        <Table items={users} handleDialog={this.handleDialog} />
      </div>
    );
  }
}

export default withStyles(styles)(withSnackbar(Users));
