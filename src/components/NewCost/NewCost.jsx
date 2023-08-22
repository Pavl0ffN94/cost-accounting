import React, {useState, memo, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {addCost} from 'store/slices/costSlice';
import {CostForm} from './CostForm';
import './NewCost.css';
import {nanoid} from '@reduxjs/toolkit';

const NewCostImpl = () => {
  const [isFormVisible, setisFormVisible] = useState(false);
  const dispatch = useDispatch();

  const saveCostDateHandler = useCallback(
    (title, amount, date) => {
      const newCost = {
        id: nanoid(),
        title,
        amount,
        date: new Date(date),
      };
      dispatch(addCost(newCost));
      console.log(newCost);
    },
    [dispatch],
  );

  const inputCostDateHandler = useCallback(() => {
    setisFormVisible(true);
  }, []);

  const canceCostHandler = useCallback(() => {
    setisFormVisible(false);
  }, []);

  return (
    <div className='new-cost '>
      {!isFormVisible && (
        <button onClick={inputCostDateHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm saveCostDate={saveCostDateHandler} onCancel={canceCostHandler} />
      )}
    </div>
  );
};

export const NewCost = memo(NewCostImpl);
