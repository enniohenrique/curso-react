import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <label htmlFor="Email">Email</label>
      <Input />
      <Button />
    </form>
  );
};

export default Form;
