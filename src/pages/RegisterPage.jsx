import React from 'react';
import {memo} from 'react';
import {SignUp} from 'components/SignUp';
import {Link} from 'react-router-dom';

const RegisterPageImpl = () => {
  return (
    <div className='page__form'>
      <h1>Register</h1>
      <SignUp />
      <p>Alredy have an accouunting? </p>
      <Link to='/login'>Sign in </Link>
    </div>
  );
};
export const RegisterPage = memo(RegisterPageImpl);
