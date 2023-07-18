import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const arr = ['item1', 'item2'];
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="senha" type="password" label="Senha" />
      <Button items={arr} />
    </div>
  );
};

export default Form;
