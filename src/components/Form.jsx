import {useState} from 'react';

import React from 'react';

const Form = (title, handleClick) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={evt => setEmail(evt.target.value)}
        placeholder='email'
      />
      <input
        type='password'
        value={password}
        onChange={evt => setPassword(evt.target.value)}
        placeholder='password'
      />
      <button
        type='submit'
        onClick={() => {
          handleClick(email, password);
        }}
        name={title}
      />
    </div>
  );
};

export {Form};
