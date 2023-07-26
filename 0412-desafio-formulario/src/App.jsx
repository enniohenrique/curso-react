import React from 'react';
import Radio from './Form/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    opcoes: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    opcoes: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    opcoes: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    opcoes: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [contador, setContador] = React.useState(0);
  const [questoes, setQuestoes] = React.useState(perguntas[contador]);
  const [pontos, setPontos] = React.useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setContador((contador) => contador + 1);
    setQuestoes(perguntas[contador]);
    verificaResposta(perguntas[contador].resposta, 'a');
  }

  function verificaResposta(respostaCorreta, respostaUsuario) {
    if (respostaCorreta === respostaUsuario) {
      setPontos((pontos) => pontos + 1);
    }
  }
  if (contador < perguntas.length) {
    return (
      <form onSubmit={handleSubmit}>
        <Radio
          options={perguntas[contador]}
          value={questoes}
          setValue={setQuestoes}
        />

        <button>Próximo</button>
      </form>
    );
  } else {
    return <p>pontos: {pontos}</p>;
  }
};

export default App;
