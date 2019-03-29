export const TOKEN_KEY = "_training_user_key_";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => {
    const { token } = JSON.parse(localStorage.getItem(TOKEN_KEY)) || '';
    return token
}

export const login = token => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
