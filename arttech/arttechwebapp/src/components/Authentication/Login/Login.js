import React from 'react';
import './Login.css';
import Textinput from '../../InputType/InputType';
import Submit from '../../Button/submit/submit';

const Login = () => {
  return (
    <div className='login'>
      <h1 className='Heading'>Login Form</h1>
      <Textinput title='Username' inputId='username' type='text' />
      <Textinput title='Password' inputId='password' type='password' />
      <div className='group'>
        <a href='/#' className='link-form'>
          Forget password
        </a>
      </div>
      <Submit title='Login' />
    </div>
  );
};

export default Login;
