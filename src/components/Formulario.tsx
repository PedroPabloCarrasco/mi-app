import { ChangeEvent, useState } from 'react';


export const Formulario = () => {
    const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    });

    const handleChange = ( {target}: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = target;
    } 


  return (




    <form autoComplete="off">Formulario
        <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input type='email' className='form-control' 
        onChange={(ev) => handleChange}

        />
        
        </div>





        <div className='mb-3'>
            <label className='form-label'>Nombre:</label>
            <input type='text' className='form-control' />
        </div>
        <button type='submit' className='btn btn-primary'>Guardar</button>
    
    <pre>{JSON.stringify(formulario)}</pre>

    </form>
  )
}
