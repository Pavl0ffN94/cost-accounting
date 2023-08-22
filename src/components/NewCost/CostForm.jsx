import React, {useState, memo, useCallback, useMemo} from 'react';
import {InputField} from '../inputForm/InputField';
import './CostForm.css';

const CostFormImpl = ({saveCostDate, onCancel}) => {
  const initialFormState = useMemo(
    () => ({
      title: '',
      amount: '',
      date: '',
    }),
    [],
  );

  const [formState, setFormState] = useState(initialFormState);

  const hadleChange = useCallback(
    (newValue, valueKey) => {
      setFormState(prevState => ({
        ...prevState,
        [valueKey]: newValue,
      }));
    },

    [setFormState],
  );

  const isFormValid = useCallback(() => {
    return (
      formState.title.trim() !== '' &&
      formState.amount.trim() !== '' &&
      formState.date.trim() !== ''
    );
  }, [formState.title, formState.amount, formState.date]);

  const submitHandler = useCallback(
    event => {
      event.preventDefault();
      if (!isFormValid()) {
        return;
      }
      saveCostDate(formState.title, formState.amount, formState.date);
    },
    [formState, saveCostDate, isFormValid],
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
            max='2023-12-31'
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
