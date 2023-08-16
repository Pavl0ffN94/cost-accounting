import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import {useDispatch} from 'react-redux';
import {removeUser} from 'store/slices/userSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcom</h1>

      <button onClick={() => dispatch(removeUser())}> Log out from {email}</button>
    </div>
  ) : (
    <Navigate to='/login' replace />
  );
};

export {HomePage};
