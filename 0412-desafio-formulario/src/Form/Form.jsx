import React from 'react';

const Form = ({
  options,
  value,
  setValue,
  contador,
  setContador,
  pontos,
  setPontos,
}) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  function verificaResposta(respostaCorreta, respostaUsuario) {
    if (respostaCorreta === respostaUsuario) {
      setPontos((pontos) => pontos + 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContador((contador) => contador + 1);
    verificaResposta(options.resposta, value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Form;
