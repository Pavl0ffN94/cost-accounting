import React from 'react';
import '../index.css';
import {memo} from 'react';
import {SignUp} from '../components/inputForm/SignUp';
import {Link} from 'react-router-dom';

const RegisterPageImpl = () => {
  return (
    <div className='page__form'>
      <h1>Register</h1>
      <SignUp />
      <p className='reg__request'>Alredy have an accouunting? </p>
      <Link className='link__entry' to='/login'>
        Sign in
      </Link>
    </div>
  );
};
export const RegisterPage = memo(RegisterPageImpl);
