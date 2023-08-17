import React from 'react';
import {useState, useCallback, memo} from 'react';
import {InputField} from './InputField';

const FormImpl = ({handleSubmit}) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateField = value => {
    if (value.trim() === '') {
      return 'Это поле обязательно';
    }
    return '';
  };

  const hadleChange = useCallback(
    (newValue, valueKey) => {
      setFormState(prevState => ({
        ...prevState,
        [valueKey]: newValue,
      }));

      const error = validateField(newValue);
      setErrors(prevState => ({
        ...prevState,
        [valueKey]: error,
      }));
    },
    [setFormState, setErrors],
  );

  const hasErrors = Object.values(errors).some(error => error !== '');

  const handleChandgeSubmit = useCallback(
    event => {
      event.preventDefault();
      handleSubmit(formState.email, formState.password);
    },
    [handleSubmit, formState.email, formState.password],
  );

  return (
    <form onSubmit={handleChandgeSubmit}>
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
      <button type='submit' disabled={hasErrors}>
        Submit
      </button>
    </form>
  );
};

export const Form = memo(FormImpl);
