import React, { Component } from 'react';
import { withSnackbar } from 'notistack';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import api from '../../api';
import Table from './Table';
import Teste from './teste';

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
    this.state = { users: [] };
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

  render() {
    const { classes, users } = this.state;
    return (
      <div>
        <ContentHeader title={`Usuários`} />
        <Fab size="small" color="secondary" color="primary" aria-label="Add">
          <ButtonBase component={Link} to="/users/form">
            <AddIcon />
          </ButtonBase>
        </Fab>
        <Table items={users} />
      </div>
    );
  }
}

// export default withStyles(styles)(withSnackbar(Users));
export default withStyles(styles)(Users);
