//importamos el useState => para hacer acciones dinamicas
import React,{useState}from 'react';
//importamos Error.js
import Error from './Error';
//importar el shortid => para el id
import shortid from 'shortid' 
//importamos propType
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto,guardarCrearGasto}) => {

    //definir variables para los gastos
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //cuando el usuario agregue un gasto
    const agregarGasto = e => {
        //para que nos mande los datos por la URL
        e.preventDefault();

        //validar
        if(cantidad <1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //console.log(gasto);
        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //resetear el form
        guardarNombre('');
        guardarCantidad(0);

    }

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error
                mensaje = "Ambos campos son Obligatorios o Presupuesto"/> : null }

            <div className='campo'>
                <label>Nombre gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
                <label>Cantidad gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 300'
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value,10))}
                />
            </div>
            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gastos'
            />
        </form>
    );
}
 
Formulario.prototype={
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired        
}
export default Formulario;