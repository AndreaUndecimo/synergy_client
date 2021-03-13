import React, { useState, useContext } from 'react';
import './Login.scss';
import { Link } from '@reach/router';
import {
  completeAuthentication,
  getUserInfo,
  loginUser,
} from '../../ApiServices/ApiUserService';
import { StateContext } from '../../globals/globalStore.reducer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(StateContext);

  const login = async (e) => {
    e.preventDefault();
    await loginUser({ email, password }).then((res) => {
      completeAuthentication(res.data.token);
      getUserInfo(res.data.id).then((res) => {
        dispatch({ type: 'user', payload: res.data });
      });
    });
    dispatch({ type: 'isAuth', payload: true });
    document.querySelector('.login_wrapper').classList.remove('show');
    setPassword('');
    setEmail('');
    try {
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const toggleRegister = () => {
    document.querySelector('.login_wrapper').classList.remove('show');
    document.querySelector('.register_wrapper').classList.add('show');
  };

  return (
    <div className='form_wrapper'>
      <form onSubmit={login}>
        <h1>Login</h1>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='login_options'>
          <button type='submit'>Signup</button>
          <p>
            Not a member yet?{' '}
            <Link to='/' onClick={toggleRegister}>
              Signup here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
