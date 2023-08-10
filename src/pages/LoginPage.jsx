import React from 'react';
import {Link} from 'react-router-dom';
//<Redirect to='/RegisterPage' />

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>

      <p>
        or <Link to='/RegisterPage'> register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
