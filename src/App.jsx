import { useEffect, useState } from 'react'
import './App.css'
import Secao1 from './components/Secao1'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
function App() {
  const [socio, setSocio] = useState('')
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // Captura os parâmetros da URL
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const socioParam = urlParams.get('socio')

    if (socioParam) {
      setSocio(socioParam)
    }
  }, [])

  return (
    <>
      <Secao1 />
      <Formulario onCalcular={setDados} />
      {dados && <Resultado dados={dados} />}

    </>
  )
}

export default App
