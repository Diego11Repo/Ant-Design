import React from 'react';
import FormNormalLogin from './components/FormNormalLogin';
import './index.less';


const login = () => {
  return (
    <div className="main">
      <p>I am login page</p>
      <FormNormalLogin />
    </div>
  );
};

export default login;
