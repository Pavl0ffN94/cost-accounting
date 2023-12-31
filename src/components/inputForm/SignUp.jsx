import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {Form} from '../inputForm/Form';
import {addUser} from 'store/slices/usersSlice';
import {useNavigate} from 'react-router-dom';
import {nanoid} from '@reduxjs/toolkit';

const SignUpImpl = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mySwal = withReactContent(Swal);

  const handleRegister = useCallback(
    (email, password) => {
      const newUser = {
        id: nanoid(),
        email: email,
        password: password,
      };

      dispatch(addUser(newUser));
      mySwal.fire({
        icon: 'success',
        title: 'Регистрация успешна!',
        text: 'Вы успешно зарегистрировались!',
      });
      navigate('/login');
    },
    [dispatch, navigate, mySwal],
  );

  return <Form title='register' handleSubmit={handleRegister} />;
};

export const SignUp = React.memo(SignUpImpl);
