import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import { generarId } from './helpers';
import ListadoGastos from './components/ListadoGastos';

function App() {

  const[presupuesto, setPresupuesto] =useState(0);
  const[isValidPresupuesto, setValidPresupuesto] = useState(false)
  
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] =useState([])

  const handleNuevoGasto = () =>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }

  const guardarGasto = gasto =>{
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() =>{
        setModal(false)
      }, 500)
  }

  return (
    <div>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setValidPresupuesto={setValidPresupuesto}

      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
            />
          </main>
            <div className='nuevo-gasto'>
              <img
                src={IconoNuevoGasto}
                alt='Icono nuevo gasto'
                onClick={handleNuevoGasto}
                />
            </div>
        </>
      )}

      {modal && <Modal
                  setModal={setModal}
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}
                />}
      
    </div>
  )
}

export default App
