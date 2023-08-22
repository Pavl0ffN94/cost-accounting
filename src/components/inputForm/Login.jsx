import React, {memo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {selectAllUsers} from '../../store/slices/usersSlice';
import {Form} from './Form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {useNavigate} from 'react-router-dom';

const LoginImpl = () => {
  const navigate = useNavigate();
  const mySwal = withReactContent(Swal);

  const users = useSelector(selectAllUsers);

  const handleLogin = useCallback(
    (email, password) => {
      const userToLogin = users.find(user => user.email === email);

      if (!userToLogin) {
        mySwal.fire({
          title: <p>Пользователь с таким email не найден.</p>,
        });
      }
      if (userToLogin.password !== password) {
        mySwal.fire({
          title: <p>Неверный логин или пароль</p>,
        });
      } else {
        navigate('/');
      }
    },
    [users, navigate, mySwal],
  );

  return (
    <div>
      <Form title='sign in' handleSubmit={handleLogin} />
    </div>
  );
};

export const Login = memo(LoginImpl);
