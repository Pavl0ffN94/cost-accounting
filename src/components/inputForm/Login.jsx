import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import {Form} from './Form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {useNavigate} from 'react-router-dom';

const LoginImpl = () => {
  const navigate = useNavigate();
  const mySwal = withReactContent(Swal);

  const users = useSelector(state => state.users.users);

  const handleLogin = (email, password) => {
    // Поиск пользователя в сторе по email
    const userToLogin = users.find(user => user.email === email);

    if (!userToLogin) {
      mySwal.fire({
        title: <p>Пользователь с таким email не найден.</p>,
      });
    } else if (userToLogin.password !== password) {
      mySwal.fire({
        title: <p>Неверный пароль.</p>,
      });
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <Form title='sign in' handleSubmit={handleLogin} />
    </div>
  );
};

export const Login = memo(LoginImpl);
