import React from 'react';


function Saludo() {
    /* 1- Componente simple */
    const Saludar = 'Hola Mundo';

    /* 2- Manejo de estado */
    

    return (
        <div>
            {Saludar}
            <button>
                Contar
            </button>
        </div>
    )
}

export default Saludo;