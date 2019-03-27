'use strict';

const User = use('App/Models/User');

class AuthController {
  async login({ request, auth }) {
    const { email, password } = request.all();
    const tokenObject = await auth.attempt(email, password);
    const user = await User.findBy('email', email);
    const { token } = tokenObject;
    const resp = { user: { username: user.username, email: user.email }, token: token };

    return resp;
  }

  async profile({ auth }) {
    // eslint-disable-next-line camelcase
    const { id, username, email, created_at, updated_at } = auth.user;

    return { id, username, email, created_at, updated_at };
  }

  async signup({ request }) {
    const data = request.only(['username', 'email', 'password']);
    const user = await User.create(data);

    return user;
  }
}

module.exports = AuthController;
