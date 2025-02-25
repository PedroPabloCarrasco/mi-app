import { useState } from 'react';
import { Timer } from './Timer';

type RimerArgs = {
  milisegundos: number;}

export const TimerPadre = () => {
  
  const [miliSegundos, setMiliSegundos] = useState(1000);
  
  return (
    <>


    <span>Milisegundos {miliSegundos}</span>
    

    <br/>







    <button className='btn btn-outline-success mt-2'
    onClick={() => setMiliSegundos(1000)}>
      1000
    </button>

    <button className='btn btn-outline-success mt-2'
    onClick={() => setMiliSegundos(2000)}>
      2000
    </button>
    <Timer />
        
    </>
  )
}
