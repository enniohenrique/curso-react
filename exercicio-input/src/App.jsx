// PRIMEIRA SOLUÇÃO

// import React from 'react';

// // Faça um fetch (POST) para a API abaixo
// // Para a criação ser aceita é necessário enviar dodos de:
// // nome, email, senha, cep, rua, numero, bairro, cidade e estado

// const App = () => {
//   const [form, setForm] = React.useState({
//     nome: '',
//     email: '',
//     senha: '',
//     cep: '',
//     rua: '',
//     numero: '',
//     bairro: '',
//     cidade: '',
//     estado: '',
//   });
//   const [enviado, setEnviado] = React.useState(false);
//   var response;
//   var resposta;

//   async function handleSubmit(event) {
//     event.preventDefault();
//     console.log(event);
//     console.log(resposta);

//     response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // form é o objeto com os dados do formulário
//       body: JSON.stringify(form),
//     });
//     resposta = response.ok;
//     if (resposta) {
//       setEnviado(true);
//     } else {
//       setEnviado(false);
//     }
//     console.log(resposta);
//   }
//   function handleChange({ target }) {
//     const { id, value } = target;
//     console.log(id, value);
//     setForm({ ...form, [id]: value });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input
//         id="nome"
//         type="text"
//         name="nome"
//         value={form.nome}
//         onChange={handleChange}
//       />

//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <label htmlFor="senha">Senha</label>
//       <input
//         id="senha"
//         type="password"
//         name="senha"
//         value={form.senha}
//         onChange={handleChange}
//       />
//       <label htmlFor="cep">Cep</label>
//       <input
//         id="cep"
//         type="text"
//         name="cep"
//         value={form.cep}
//         onChange={handleChange}
//       />
//       <label htmlFor="rua">Rua</label>
//       <input
//         id="rua"
//         type="text"
//         name="rua"
//         value={form.rua}
//         onChange={handleChange}
//       />
//       <label htmlFor="numero">Numero</label>
//       <input
//         id="numero"
//         type="text"
//         name="numero"
//         value={form.numero}
//         onChange={handleChange}
//       />
//       <label htmlFor="bairro">Bairro</label>
//       <input
//         id="bairro"
//         type="text"
//         name="bairro"
//         value={form.bairro}
//         onChange={handleChange}
//       />
//       <label htmlFor="cidade">Cidade</label>
//       <input
//         id="cidade"
//         type="text"
//         name="cidade"
//         value={form.cidade}
//         onChange={handleChange}
//       />
//       <label htmlFor="estado">Estado</label>
//       <input
//         id="estado"
//         type="text"
//         name="estado"
//         value={form.estado}
//         onChange={handleChange}
//       />

//       {enviado && <p>Formulário enviado</p>}

//       <button>Enviar</button>
//     </form>
//   );
// };

// export default App;


// SEGUNDA SOLUÇÃO

import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado</p>}
    </form>
  );
};

export default App;

