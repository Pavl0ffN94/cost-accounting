import React from 'react';
import {useState, useCallback, memo} from 'react';
import {InputField} from './InputField';

const FormImpl = ({handleSubmit}) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
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
