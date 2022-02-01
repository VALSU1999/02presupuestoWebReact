//importamos el Fragment=> para poder devolver multiples lineas
//importamos el useState => para hacer acciones dinamicas
import React,{Fragment, useState} from 'react';
//importamos el fichero Error.js
import Error from './Error';
//importamos propType
import PropTypes from 'prop-types';

//le pasamos los props
const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {

    
    //Definir el state para la validacion
    const [cantidad,guardarCantidad] = useState(0);
    //definir el state para el mensaje de error
    const [error, guardarError] = useState(false);

    //funcion que lee el presupuesto
    const definirPresupuesto = e =>{
        //parseamos y le pasamos al guardarCantidad() 
        guardarCantidad(parseInt(e.target.value, 10))
       
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        //para que nos mande los datos por la URL
        e.preventDefault();

        //validar
        if(cantidad <1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        //si se pasa la validacion
        guardarError(false);

        //le pasamos la cantidad a los props
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return(
        <Fragment>
            <h2>Colocar tu Presupuesto</h2>
            
            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Coloca tu Presupuesto'
                    onChange={definirPresupuesto}
                />
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'
                />
            </form>
        </Fragment>
    );
}

Pregunta.prototype={
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,      
    actualizarPregunta: PropTypes.func.isRequired        
}
export default Pregunta;
