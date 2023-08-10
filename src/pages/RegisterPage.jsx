import React from 'react';
import {Link} from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>

      <p>
        Alredy have an accouunting? <Link to='/login'>Sign in </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
