import React, { Component } from 'react';
import Form from '../../components/Form';
import FormButton from '../../components/FormButton';
import FormSectionButtons from '../../components/FormSectionButtons';
import PageHeader from '../../components/PageHeader';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import { withSnackbar } from 'notistack';
import { MessageError } from '../../components/Messages';

class UserForm extends Component {
  state = {
    username: '',
    email: '',
    errors: null
  };

  async componentWillMount() {
    const { match } = this.props;
    try {
      const response = await api.get(`users/${match.params.id}`, this.state.fields);
      this.setState({ username: response.data.username, email: response.data.email });
    } catch (e) {
      this.setState({ errors: e.response.data });
      if (e !== undefined) {
        this.props.enqueueSnackbar(MessageError(e), { variant: 'error' });
      }
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { match } = this.props;
    const { email, username } = this.state;
    try {
      await api.put(`users/${match.params.id}`, { email, username });
      this.props.enqueueSnackbar('Ok', { variant: 'success' });
      this.props.history.push('/users');
    } catch (e) {
      this.setState({ errors: e.response.data });
      if (e !== undefined) {
        this.props.enqueueSnackbar(MessageError(e), { variant: 'error' });
      }
    }
  };

  render() {
    const { username, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Form onSubmit={this.handleSubmit}>
          <PageHeader title={`Editar Usuário ${username}`} />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="username"
                name="username"
                label="Usuário"
                fullWidth
                autoComplete="fname"
                onChange={e => this.setState({ username: e.target.value })}
                value={username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                type="email"
                fullWidth
                autoComplete="fname"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
              />
            </Grid>
          </Grid>
          <FormSectionButtons>
            <FormButton title="Salvar" />
          </FormSectionButtons>
        </Form>
      </form>
    );
  }
}

export default withSnackbar(UserForm);
