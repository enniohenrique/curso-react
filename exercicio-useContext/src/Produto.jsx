import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  if (global.dados === null) return null;
  return (
    <div>
      Produto:{' '}
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
      <button onClick={global.limparDados} >Limpar</button>
    </div>
  );
};

export default Produto;
