import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ( {
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto,
    setValidPresupuesto }	) => {

    
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto
            presupuesto={presupuesto}
            />
        ):(
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setValidPresupuesto={setValidPresupuesto}

        />
        )}
        
    </header>
  )
}

export default Header
