import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import './Register.scss';
import {
  registerUser,
  completeAuthentication,
} from '../../ApiServices/ApiUserService';
import { StateContext } from '../../globals/globalStore.reducer';

const Register = () => {
  const { state, dispatch } = useContext(StateContext);

  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    gender: '',
  });

  const registerNewUser = (e) => {
    e.preventDefault();
    try {
      registerUser(user).then((res) => completeAuthentication(res.data));
      dispatch({ type: 'user', payload: user });
      dispatch({ type: 'isAuth', payload: true });
      document.querySelector('.register_wrapper').classList.remove('show');
      setUser({ name: '', surname: '', email: '', password: '', gender: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const toggleLogin = () => {
    document.querySelector('.register_wrapper').classList.remove('show');
    document.querySelector('.login_wrapper').classList.add('show');
  };

  return (
    <div className='form_wrapper'>
      <form onSubmit={registerNewUser}>
        <h1>Welcome to Synergy</h1>
        <div className='name_surname_inputs'>
          <input
            type='text'
            placeholder='Name'
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
          />
          <input
            type='text'
            placeholder='Surname'
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
            value={user.surname}
          />
        </div>
        <div className='email'>
          <input
            type='email'
            placeholder='Email'
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
        </div>
        <div className='password'>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
          />
        </div>
        <h3>What is your gender?</h3>
        <div className='gender'>
          <div className='male'>
            <input
              type='radio'
              name='gender'
              id='male'
              value='male'
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
            <label htmlFor='male'>Male</label>
          </div>
          <div className='female'>
            <input
              type='radio'
              name='gender'
              id='female'
              value='female'
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
            <label htmlFor='female'>Female</label>
          </div>
          <div className='other'>
            <input
              type='radio'
              name='gender'
              id='other'
              value='other'
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='login_options'>
          <button type='submit'>Signup</button>
          <p>
            Already registered?{' '}
            <Link to='/' onClick={toggleLogin}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
