import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {memo} from 'react';
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';

import React from 'react';

function SignUpImpl() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const push = () => navigate('/login');
  const mySwal = withReactContent(Swal);

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
        const errorMessage = error.message;
        mySwal.fire({
          title: <p>{errorMessage}</p>,
        });
      });
  };
  return <Form title='register' handleSubmit={handleRegister} />;
}

export const SignUp = memo(SignUpImpl);
