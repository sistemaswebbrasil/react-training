import React, { Component, Fragment } from 'react';
import Form from '../../components/Form';
import FormButton from '../../components/FormButton';
import FormSectionButtons from '../../components/FormSectionButtons';
import PageHeader from '../../components/PageHeader';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import { withRouter } from 'react-router';
import { MessageErrorArray, FieldMessage, FieldHasError } from '../../components/Messages';
import withSnackbarMessages from '../../components/withSnackbarMessages';

class UserForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: [],
    title: null
  };

  async componentWillMount() {
    const { match } = this.props;
    if (match.params.id) {
      this.setState({ title: 'Editar Usuário' });
      try {
        const response = await api.get(`users/${match.params.id}`, this.state.fields);
        this.setState({ username: response.data.username, email: response.data.email });
      } catch (e) {
        this.setState({ errors: e.response.data });
        this.props.MessageError(e);
      }
    } else {
      this.setState({ title: 'Novo Usuário' });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { match } = this.props;
    const { email, username, password, confirmPassword, errors } = this.state;

    if (!match.params.id && password !== confirmPassword) {
      const error = {
        message: 'password and confirm password same validation',
        field: 'confirmPassword',
        validation: 'same'
      };
      let err = errors;
      if (errors) {
        err = errors.filter(item => item.field !== 'password' && item.field !== 'confirmPassword');
      }
      this.setState({ errors: err.concat(error) });
      this.props.errorMessageFromArray(err.concat(error));
    } else {
      try {
        await api.postOrPut('users', match.params.id || null, { email, username, password });
        this.props.successMessage('Usuário criado');
        this.props.history.push('/users');
      } catch (e) {
        this.setState({ errors: MessageErrorArray(e) });
        this.props.errorMessage(e);
      }
    }
  };

  render() {
    const { username, email, title, errors, password, confirmPassword } = this.state;
    const { match } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <Form onSubmit={this.handleSubmit}>
          <PageHeader title={title} />
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
                error={errors && FieldHasError(errors, 'username')}
                helperText={errors && FieldMessage(errors, 'username')}
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
                autoComplete="off"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
                error={errors && FieldHasError(errors, 'email')}
                helperText={errors && FieldMessage(errors, 'email')}
              />
            </Grid>
            {!match.params.id && (
              <Fragment>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Senha"
                    type="password"
                    fullWidth
                    autoComplete="off"
                    onChange={e => this.setState({ password: e.target.value })}
                    error={errors && FieldHasError(errors, 'password')}
                    helperText={errors && FieldMessage(errors, 'password')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirme a Senha"
                    type="password"
                    fullWidth
                    autoComplete="fname"
                    onChange={e => this.setState({ confirmPassword: e.target.value })}
                    error={errors && FieldHasError(errors, 'confirmPassword')}
                    helperText={errors && FieldMessage(errors, 'confirmPassword')}
                  />
                </Grid>
              </Fragment>
            )}
          </Grid>
          <FormSectionButtons>
            <FormButton title="Salvar" />
          </FormSectionButtons>
        </Form>
      </form>
    );
  }
}

export default withSnackbarMessages(withRouter(UserForm));
