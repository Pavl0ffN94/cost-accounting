import React from 'react';
import '../index.css';
import {useState, useCallback, memo} from 'react';

const InputImpl = ({value: propsValue, onChange, valueKey, type, error}) => {
  const [value, setValue] = useState(propsValue);

  const onBlur = useCallback(() => {
    onChange(value, valueKey);
  }, [value, valueKey, onChange]);

  return (
    <div className='input__field'>
      {error && <label style={{color: 'red'}}>{error}</label>}
      <input
        onBlur={onBlur}
        type={type || 'text'}
        name='email'
        value={value}
        placeholder={valueKey}
        onChange={evt => setValue(evt.target.value, 'email')}
      />
    </div>
  );
};

export const InputField = memo(InputImpl);
