import {Login} from 'components/Login';
import React from 'react';
import {Link} from 'react-router-dom';

const LoginPage = () => {
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

export {LoginPage};
