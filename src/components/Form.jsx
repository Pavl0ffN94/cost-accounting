import React from 'react';
import {useState, useCallback, memo} from 'react';
import {InputField} from './InputField';

const FormImpl = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const clearState = useCallback(() => {
    setFormState({
      email: '',
      password: '',
    });
  }, []);

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();

      clearState();
    },
    [clearState],
  );

  const hadleChange = useCallback((newValue, valueKey) => {
    setFormState(prevState => ({
      ...prevState,
      [valueKey]: newValue,
    }));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type='email'
        valueKey='email'
        onChange={hadleChange}
        value={formState.email}
      />

      <InputField
        type='password'
        valueKey='password'
        onChange={hadleChange}
        value={formState.password}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export const Form = memo(FormImpl);
