//importamos el useState => para hacer acciones dinamicas
//Importamos el useEffect => nos sirve para ver el state cambie
import React, {useState,useEffect}from 'react';
//importamos la Pregunta
import Pregunta from './components/Pregunta'
//importamos la Formulario
import Formulario from './components/Formulario'
//importamos la Listado
import Listado from './components/Listado';
//importamos la ControlPresupuesto
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  //definimos el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [creargasto, guardarCrearGasto] = useState(false)

  //useEffect que actualizar el restante
  useEffect(()=>{
    //codicion para mostrar gastos o no
    if(creargasto){
      //agregar el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
      //Resetear a false
      guardarCrearGasto(false);
    }
    // eslint-disable-next-line
  },[gasto]);
  

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className='contenido-principal'>
        {mostrarpregunta ? (<Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}

        />)
        :(<div className='row'>
          <div className='one-half column'>
              <Formulario
              guardarGasto={guardarGasto}
              guardarCrearGasto={guardarCrearGasto}
              />
          </div>
          <div className='one-half column'>
            <Listado
              gastos = {gastos}
            />
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        </div>)
        
        }
        
        
      </div>
    </div>
    
  );
}

export default App;
