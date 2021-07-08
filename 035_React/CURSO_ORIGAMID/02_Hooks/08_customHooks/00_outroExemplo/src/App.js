import { useEffect } from 'react';
import './App.css';
import useFetch from './Hooks/useFetch';

function App() {
  const { request, data, loading, error } = useFetch()

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      );
      console.log(response, json);
    }
    fetchData()
  }, [request])

  // se der erro no fetch:
  if (error) return <h2>{error}</h2>

  //mostrar h2, se dentro do useFetch não passar por setLoading(false)
  if (loading) return <h2>Loading.....</h2>

  //se o fetch não tem nada, null, senão retorna a div:
  if (data)
    return (
      <div>
        {
          data.map((produto) => (
            <div key={produto.id}>
              <h1>{produto.id}</h1>
            </div>
          ))
        }
      </div >
    )
  else return null
}

export default App;