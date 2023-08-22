import React, {useCallback, memo, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import {useDispatch} from 'react-redux';
import {removeUser} from '../store/slices/usersSlice';
import {Costs} from '../components/Costs/Costs';
import {NewCost} from '../components/NewCost/NewCost';
import {useNavigate} from 'react-router-dom';

const HomePageImpl = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth, email} = useAuth();

  const logout = useCallback(() => {
    dispatch(removeUser());
    navigate('/login');
  }, [dispatch, navigate]);

  return isAuth ? (
    <div>
      <NewCost />
      <Costs />
      <button className='btn__logout' onClick={logout}>
        Log out {email}
      </button>
    </div>
  ) : (
    <Navigate to='/login' replace />
  );
};

export const HomePage = memo(HomePageImpl);
