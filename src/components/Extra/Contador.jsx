import React, {useState} from 'react';


const Contador = () => {
   
   const [numero, setNumero] = useState(0);

    return (
        <div>
            <h3> Te ha gustado {numero} veces </h3>
            <button onClick={()=> setNumero(numero + 1)} >
                Me gusta asi
            </button>
        </div>
    )

};

   

export default Contador;