import React, {useState} from 'react';

function Contador(){
    const [contador, setContador] = useState(0);

    const incrementar = () => {setContador(contador + 1)};
    const decrementar = () => {setContador(contador - 1)};


    return(
        <div>
            <h1>Exercício de fixação</h1>            
            <p>Contagem: {contador}</p> 
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}    

export default Contador