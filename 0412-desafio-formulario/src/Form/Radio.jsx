import React from 'react';

const Radio = ({ options, value, setValue, resp, ...props }) => {
  const [pontos, setPontos] = React.useState(0);
  function handleChange({ target }) {
    setValue(target.value);
    verificaResposta(options.resposta, target.value);
  }

  function verificaResposta(respostaCorreta, respostaUsuario) {
    if (respostaCorreta === respostaUsuario) {
      setPontos((pontos) => pontos + 1);
    }
  }
  console.log(pontos);

  return (
    <>
      <h2>{options.pergunta}</h2>
      {options.opcoes.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
