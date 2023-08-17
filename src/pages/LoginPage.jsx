import React from 'react';
import {memo} from 'react';
import {Login} from 'components/Login';
import {Link} from 'react-router-dom';

const LoginPageImpl = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />

      <p>
        or <Link to='/registerpage'> Sign Up</Link>
      </p>
    </div>
  );
};

export const LoginPage = memo(LoginPageImpl);
