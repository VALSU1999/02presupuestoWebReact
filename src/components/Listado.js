import React from 'react';
//importamos Gasto
import Gasto from './Gasto';

//importamos propType
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {
    return(
    <div className='gastos-realizados'>
        <h2>Listado</h2>
        {gastos.map(gasto =>(
            <Gasto
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
    )
}
Listado.prototype={
    gastos: PropTypes.array.isRequired    
}
export default Listado;