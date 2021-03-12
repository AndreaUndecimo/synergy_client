import axios from 'axios';

export async function registerUser(user) {
  return axios.post(`${process.env.REACT_APP_BE_URL}/user/register`, user);
}

export async function loginUser({ email, password }) {
  return axios.post(`${process.env.REACT_APP_BE_URL}/user/login`, {
    email,
    password,
  });
}

export async function completeAuthentication(token) {
  localStorage.setItem('token', token);
}

export async function logOut() {
  localStorage.clear();
}
