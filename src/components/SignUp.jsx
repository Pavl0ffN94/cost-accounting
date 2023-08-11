import {useDispatch} from 'react-redux';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';

import React from 'react';

function SignUp() {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return <Form title='register' handleClick={handleRegister} />;
}

export {SignUp};
