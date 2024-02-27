import React from 'react'

const NicoGames = (props) => {
    // console.log(props.personajes);
    const arrayMu = props.personajes;

    arrayMu.map((personaje) => {
        console.log(personaje.nombre)
    })

    return (
        <div>
            <ul>
                {
                    arrayMu.map((personaje, index) => {
                        return (
                            <li key={index}>
                                {personaje.nombre}
                            </li>
                        )
                        
                    })
                }
            </ul>
            <h5>Nombre: {props.personajes[5].nombre}</h5>
            <h5>Clase: {props.personajes[5].clase}</h5>
        </div>
    )
}

export default NicoGames
