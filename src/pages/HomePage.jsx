import React from 'react';
import {Navigate} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1> HomePages</h1>
      <Navigate to='/login' />;
    </>
  );
};

export {HomePage};
