import React from 'react';
import TextoBonito from './TextoBonito';

function Cartel(props) {

    // const miSaludo = 'Soy el cartel'
    const propTextoBonito = 'ESTO SE VISUALIZARA EN EL COMPONENTE TEXTO BONITO'
    console.log(props)
    const mensajeDelCartel = props.cartel;

    return (
        <div>
            {/* <h4>{miSaludo}</h4> */}
            {/* <TextoBonito /> */}
            {/* <p>{propTextoBonito}</p> */}
            <p>{mensajeDelCartel}</p>
        </div>
    );
}

export default Cartel;