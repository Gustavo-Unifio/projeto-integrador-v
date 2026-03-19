import React, {useState} from 'react';

function Saudacao(){
    const [nome, setNome] = useState('');

    return(
        <div>
            <p>Digite seu nome:</p>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            {nome && <p>Olá {nome}</p>}
        </div>
    )
}


export default Saudacao