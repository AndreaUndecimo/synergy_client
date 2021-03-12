import React, { useState } from 'react';
import './Login.scss';
import { Link } from '@reach/router';
import {
  completeAuthentication,
  loginUser,
} from '../../ApiServices/ApiUserService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    loginUser({ email, password }).then((res) =>
      completeAuthentication(res.data)
    );
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
