import React from 'react';
import Cartel from './Cartel';
import NicoGames from './NicoGames';

function Caja(props) {
    const carteles = ['CARTEL ROJO', 'CARTEL VERDE', 'CARTEL AZUL'];

    const cartel3 = 'CARTEL DORADO';

    const personajes_mu_online = [
        { "nombre": "Dark Wizard", "clase": "Mago Oscuro", "tipo": "Magia", "rol": "Daño a distancia", "fortaleza": "Alto daño mágico" },
        { "nombre": "Dark Knight", "clase": "Caballero Oscuro", "tipo": "Melee", "rol": "Tanque/Daño", "fortaleza": "Alta defensa y resistencia" },
        { "nombre": "Elf", "clase": "Elfo", "tipo": "Arquería", "rol": "Daño a distancia/Soporte", "fortaleza": "Alta precisión y velocidad" },
        { "nombre": "Magic Gladiator", "clase": "Gladiador Mágico", "tipo": "Híbrido", "rol": "Daño/Tanque", "fortaleza": "Versatilidad en combate" },
        { "nombre": "Dark Lord", "clase": "Señor Oscuro", "tipo": "Melee/Magia", "rol": "Tanque/Soporte", "fortaleza": "Control de masas y habilidades de grupo" },
        { "nombre": "Summoner", "clase": "Invocador", "tipo": "Magia", "rol": "Soporte/Daño", "fortaleza": "Habilidades de invocación y control de mascotas" }
    ]

    return (
        <div>
            <h2>Soy la caja</h2>
            <div>
                {/* Contenido de la caja */}
                <Cartel cartel={carteles[0]} />
                <Cartel cartel={carteles[1]} />
                <Cartel cartel={carteles[2]} />
                <Cartel cartel={cartel3} />
                <Cartel cartel={'Comision 77i'} />
                <NicoGames personajes={personajes_mu_online} />
            </div>
        </div>
    );
}

export default Caja;