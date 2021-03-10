import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Navbar.scss';

const Navbar = () => {
  const toggleLoginForm = (e) => {
    document.querySelector('.login_wrapper').classList.add('show');
  };

  const toggleSignupForm = (e) => {
    document.querySelector('.register_wrapper').classList.add('show');
  };

  return (
    <>
      <div className='register_wrapper'>
        <Register />
      </div>
      <div className='login_wrapper'>
        <Login />
      </div>
      <div className='navbar_wrapper'>
        <div className='logo'>
          <h1>SYNERGY</h1>
        </div>
        <div className='user_actions'>
          <button id='join_btn' onClick={toggleLoginForm}>
            Join
          </button>
          <button id='signup_btn' onClick={toggleSignupForm}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
