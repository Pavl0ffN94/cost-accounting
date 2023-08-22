import React, {useCallback, memo} from 'react';
import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentUser, selectCurrentUser} from '../store/slices/usersSlice'; // Импортируем селектор для текущего пользователя
import {Costs} from '../components/Costs/Costs';
import {NewCost} from '../components/NewCost/NewCost';

const HomePageImpl = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser); // Используем селектор для текущего пользователя

  const logout = useCallback(() => {
    dispatch(setCurrentUser(null)); // Сбрасываем текущего пользователя
  }, [dispatch]);

  return currentUser ? (
    <div>
      <NewCost />
      <Costs />
      <button className='btn__logout' onClick={logout}>
        Log out {currentUser.email}
      </button>
    </div>
  ) : (
    <Navigate to='/login' replace />
  );
};

export const HomePage = memo(HomePageImpl);
