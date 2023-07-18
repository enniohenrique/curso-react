import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  console.log(global);

  return (
    <div>
      Produto:{global.contar}{' '}
      <button onClick={() => global.adicionarDois()}> Adicionar</button>
    </div>
  );
};

export default Produto;
