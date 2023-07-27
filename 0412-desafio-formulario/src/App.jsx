import React from 'react';
import Form from './Form/Form';

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

  if (contador < perguntas.length) {
    return (
      <Form
        options={perguntas[contador]}
        value={questoes}
        setValue={setQuestoes}
        contador={contador}
        setContador={setContador}
        pontos={pontos}
        setPontos={setPontos}
      />
    );
  } else {
    return (
      <p>
        Você acertou: {pontos} de {perguntas.length}
      </p>
    );
  }
};

export default App;
