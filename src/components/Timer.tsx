import React, { useEffect, useState } from 'react';

export const Timer = () => {
    const [segundos, setSegundos] = useState(0);
    console.log();
    useEffect(() => {
        const interval = setInterval(() => {
            setSegundos(prevSegundos => prevSegundos + 1);
        }, 1000); // Cada segundo

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    );
};
