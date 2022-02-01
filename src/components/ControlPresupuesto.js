import React, {Fragment} from 'react';
//importamos el helpers revisarPresupuesto
import {revisarPresupuesto} from '../helpers';
//importamos propType
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto: {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: {restante}
            </div>
        </Fragment>
     );
};

ControlPresupuesto.prototype={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired        
}
export default ControlPresupuesto;