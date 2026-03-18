import './App.css'
import React, { useState } from 'react';
import Titulo from './components/ex1/Titulo'


function App(){
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return(
    <div>
      <Titulo/>

      <h2>Contador:</h2>
      <p>{contador}</p>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={incrementar}>Incrementar</button>
      
    </div>
  )
}

export default App
