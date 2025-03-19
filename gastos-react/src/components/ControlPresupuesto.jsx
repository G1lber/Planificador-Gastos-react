import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) =>{
        
        var formatter = new Intl.NumberFormat('es-CO',{
            style:'currency',
            currency:'COP',
            minimumFractionDigits:0
        })
        return formatter.format(cantidad)
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica en este lugar</p>
      </div>

      <div className='contenido-presupuesto'>
        <p>
            <span>Presupuesto: </span> { formatearCantidad(presupuesto) }
        </p>
        <p>
            <span>Disponible: </span> { formatearCantidad(0) }
        </p>
        <p>
            <span>Gastada: </span> { formatearCantidad(0) }
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
