import React from 'react';
import './Login.scss';
import { Link } from '@reach/router';

const Login = () => {
  const toggleRegister = () => {
    document.querySelector('.login_wrapper').classList.remove('show');
    document.querySelector('.register_wrapper').classList.add('show');
  };

  return (
    <div className='form_wrapper'>
      <form>
        <h1>Login</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
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
