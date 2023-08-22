import React, {memo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectAllUsers, setCurrentUser} from '../../store/slices/usersSlice';
import {Form} from './Form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {useNavigate} from 'react-router-dom';

const LoginImpl = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mySwal = withReactContent(Swal);

  const users = useSelector(selectAllUsers);

  const handleLogin = useCallback(
    (email, password) => {
      const userToLogin = users.find(user => user.email === email);

      if (!userToLogin) {
        mySwal.fire({
          title: 'Пользователь с таким email не найден',
        });
      } else if (userToLogin.password !== password) {
        mySwal.fire({
          title: ' Неверный логин или пароль',
        });
      } else {
        dispatch(setCurrentUser(userToLogin));
        navigate('/');
      }
    },
    [users, navigate, mySwal, dispatch],
  );

  return (
    <div>
      <Form title='sign in' handleSubmit={handleLogin} />
    </div>
  );
};

export const Login = memo(LoginImpl);
