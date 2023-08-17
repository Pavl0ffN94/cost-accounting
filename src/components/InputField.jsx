import React from 'react';
import {useState, useCallback, memo} from 'react';

const InputImpl = ({value: propsValue, onChange, valueKey, type, error}) => {
  const [value, setValue] = useState(propsValue);

  const onBlur = useCallback(() => {
    onChange(value, valueKey);
  }, [value, valueKey, onChange]);

  return (
    <div>
      {error && <span style={{color: 'red'}}>{error}</span>}
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
