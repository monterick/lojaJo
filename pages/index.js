import { useState } from 'react'
import { unstable_batchedUpdates } from 'react-dom';

function Home(){
    return (
        <div>
          <h2>Home Ricardo</h2>
        <Contador />
        </div>
    )
    
}
function Contador(){
    const[contador,setContador]  = useState(1);
    function adicionarContador(){
        setContador(contador+1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home