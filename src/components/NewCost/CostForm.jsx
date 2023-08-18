import React, {useState} from 'react';
import {memo} from 'react';
import './CostForm.css';

const CostFormImpl = props => {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = e => {
    setInputName(e.target.value);
  };

  const amountChangeHandler = e => {
    setInputAmount(e.target.value);
  };

  const dateChangeHandler = e => {
    setInputDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const costDate = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostDate(costDate);

    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type='text' value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input
            type='number'
            value={inputAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input
            onChange={dateChangeHandler}
            value={inputDate}
            type='date'
            min='2019-01-01'
            step='2023-12-31'
          />
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить расход</button>
          <button type='button' onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};
export const CostForm = memo(CostFormImpl);
