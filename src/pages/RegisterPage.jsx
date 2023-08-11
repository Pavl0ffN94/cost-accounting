import {SignUp} from 'components/SignUp';
import React from 'react';
import {Link} from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />

      <p>Alredy have an accouunting? </p>
      <Link to='/login'>Sign in </Link>
    </div>
  );
};

export {RegisterPage};
