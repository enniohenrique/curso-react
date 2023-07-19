import React from 'react';
import useFetch from './useFetch';

function App() {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;

  if (loading) return <p>Carregando...</p>;

  if (data) {
    return (
      <div>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  } else return null;
}

export default App;
