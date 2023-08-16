import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';

import React from 'react';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const push = () => navigate('/login');

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        push();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return <Form title='register' handleSubmit={handleRegister} />;
}

export {SignUp};
