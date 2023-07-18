import React from 'react';

function Produtos({ dados }) {
  console.log(dados);

  return (
    <div>
      <h1>{dados.id}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} />
    </div>
  );
}

export default Produtos;
