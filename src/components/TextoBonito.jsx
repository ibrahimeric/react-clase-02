import React from 'react';

function TextoBonito(props) {
    console.log(props);

    const mensajeDePadre = props.propTextoBonito
    
    return (
        <div>
            <span>Soy un Texto {mensajeDePadre}</span>
        </div>
    );
}

export default TextoBonito;