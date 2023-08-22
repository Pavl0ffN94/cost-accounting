import React, {useState, memo, useCallback} from 'react';
import {InputField} from '../inputForm/InputField';
import './CostForm.css';

const CostFormImpl = ({saveCostDate, onCancel}) => {
  const [formState, setFormState] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const hadleChange = useCallback(
    (newValue, valueKey) => {
      setFormState(prevState => ({
        ...prevState,
        [valueKey]: newValue,
      }));
    },

    [setFormState],
  );

  const submitHandler = useCallback(
    event => {
      event.preventDefault();
      saveCostDate(formState.title, formState.amount, formState.date);
    },
    [formState.title, formState.amount, formState.date, saveCostDate],
  );

  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <InputField
            type='text'
            valueKey='title'
            value={formState.title}
            onChange={hadleChange}
          />
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <InputField
            type='number'
            valueKey='amount'
            value={formState.amount}
            onChange={hadleChange}
          />
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <InputField
            onChange={hadleChange}
            value={formState.date}
            valueKey='date'
            type='date'
            min='2019-01-01'
            step='2023-12-31'
          />
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить расход</button>
          <button type='button' onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};
export const CostForm = memo(CostFormImpl);
