import React, {useCallback} from 'react';
import {memo, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import {useDispatch} from 'react-redux';
import {removeUser} from '../store/slices/usersSlice';
import {Costs} from '../components/Costs/Costs';
import {NewCost} from '../components/NewCost/NewCost';
import {useNavigate} from 'react-router-dom';

const HomePageImpl = () => {
  const [costs, setCosts] = useState([
    {
      id: '',
      date: new Date(''),
      description: '',
      amount: '',
    },
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth, email} = useAuth();

  const addCostHandler = cost => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  const logout = useCallback(() => {
    dispatch(removeUser());
    navigate('/login');
  }, [dispatch, navigate]);

  return isAuth ? (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
      <button className='btn__logout' onClick={logout}>
        {' '}
        Log out {email}
      </button>
    </div>
  ) : (
    <Navigate to='/login' replace />
  );
};

export const HomePage = memo(HomePageImpl);
