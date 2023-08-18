import React from 'react';
import {memo} from 'react';
import {Login} from '../components/inputForm/Login';
import {Link} from 'react-router-dom';

const LoginPageImpl = () => {
  return (
    <div className='page__form'>
      <h1>Login</h1>
      <Login />
      <Link className='link__entry' to='/registerpage'>
        Sign Up
      </Link>
    </div>
  );
};

export const LoginPage = memo(LoginPageImpl);
