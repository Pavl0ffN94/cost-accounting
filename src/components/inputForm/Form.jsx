import React from 'react';
import '../../index.css';
import {useState, useCallback, memo} from 'react';
import {InputField} from './InputField';

const FormImpl = ({title, handleSubmit}) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const hasErrors =
    Object.values(errors).some(error => error !== '') ||
    Object.values(formState.password).some(value => value === '');

  const validateField = useCallback(
    (value, valueKey) => {
      if (value.trim() === '') {
        return 'Это поле обязательно';
      } else if (
        valueKey === 'email' &&
        !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)
      ) {
        return 'Некорректный email';
      } else if (valueKey === 'confirmPassword' && value !== formState.password) {
        return 'Пароли не совпадают';
      }
      return '';
    },
    [formState.password],
  );

  const hadleChange = useCallback(
    (newValue, valueKey) => {
      setFormState(prevState => ({
        ...prevState,
        [valueKey]: newValue,
      }));

      const error = validateField(newValue, valueKey);
      setErrors(prevState => ({
        ...prevState,
        [valueKey]: error,
      }));
    },
    [setFormState, setErrors, validateField],
  );

  const handleChandgeSubmit = useCallback(
    event => {
      event.preventDefault();
      handleSubmit(formState.email, formState.password);
    },
    [handleSubmit, formState.email, formState.password],
  );

  return (
    <form className='form__entries' onSubmit={handleChandgeSubmit}>
      <InputField
        type='email'
        valueKey='email'
        onChange={hadleChange}
        value={formState.email}
        error={errors.email}
      />
      <InputField
        type='password'
        valueKey='password'
        onChange={hadleChange}
        value={formState.password}
        error={errors.password}
      />
      {title === 'register' ? (
        <InputField
          type='password'
          valueKey='confirmPassword'
          onChange={hadleChange}
          value={formState.confirmPassword}
          error={errors.confirmPassword}
        />
      ) : null}

      <button type='submit' className='form__btn' disabled={hasErrors}>
        Go In
      </button>
    </form>
  );
};

export const Form = memo(FormImpl);
