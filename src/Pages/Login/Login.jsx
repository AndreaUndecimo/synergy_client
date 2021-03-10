import React from 'react';
import { Link } from '@reach/router';

const Login = () => {
  return (
    <div className='form_wrapper'>
      <form>
        <h1>Welcome to Synergy</h1>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Surname' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <div className='login_options'>
          <button type='submit'>Signup</button>
          <p>
            Already registered? <Link to='/'>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
