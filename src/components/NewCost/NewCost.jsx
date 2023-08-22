import React, {useState} from 'react';
import {memo, useCallback} from 'react';
import {CostForm} from './CostForm';
import './NewCost.css';
import {nanoid} from '@reduxjs/toolkit';

const NewCostImpl = props => {
  const [isFormVisible, setisFormVisible] = useState(false);

  const saveCostDateHandler = useCallback(
    inputCostDate => {
      const costDate = {
        ...inputCostDate,
        id: nanoid(),
      };
      props.onAddCost(costDate);
      setisFormVisible(false);
    },
    [props],
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
        <CostForm onSaveCostDate={saveCostDateHandler} onCancel={canceCostHandler} />
      )}
    </div>
  );
};

export const NewCost = memo(NewCostImpl);
