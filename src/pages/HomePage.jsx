import React from 'react';
import {memo, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import {useDispatch} from 'react-redux';
import {removeUser} from 'store/slices/userSlice';
import {Costs} from '../components/Costs/Costs';
import {NewCost} from '../components/NewCost/NewCost';

const HomePageImpl = () => {
  const [costs, setCosts] = useState([
    {
      id: '',
      date: new Date(),
      description: '',
      amount: '',
    },
  ]);
  const dispatch = useDispatch();

  const {isAuth, email} = useAuth();

  const addCostHandler = cost => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  return isAuth ? (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
      <button onClick={() => dispatch(removeUser())}> Log out from {email}</button>
    </div>
  ) : (
    <Navigate to='/login' replace />
  );
};

export const HomePage = memo(HomePageImpl);
