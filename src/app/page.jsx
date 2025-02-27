"use client"

import { useState } from "react"
import PlanoDeportivo from "./componentes/planoDeportivo"
import SelectorDeporte from "./componentes/selectorDeporte"
import ResumenReserva from "./componentes/resumen"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  // Estado para el deporte seleccionado
  const [deporteSeleccionado, setDeporteSeleccionado] = useState("futbol")

  // Estado para la cancha seleccionada
  const [canchaSeleccionada, setCanchaSeleccionada] = useState(null)

  // Estado para la duración de la reserva (en horas)
  const [duracion, setDuracion] = useState(1)

  // Estado para las canchas reservadas
  const [canchasReservadas, setCanchasReservadas] = useState({
    futbol: [],
    baloncesto: [],
    tenis: [],
  })

  // Nuevo estado para el historial de reservas
  const [reservas, setReservas] = useState([])

  // Precios por hora según el deporte
  const precios = {
    futbol: 50,
    baloncesto: 40,
    tenis: 30,
  }

  // Función para seleccionar una cancha
  const seleccionarCancha = (id) => {
    // Verificar si la cancha ya está reservada
    if (canchasReservadas[deporteSeleccionado].includes(id)) {
      return
    }
    setCanchaSeleccionada(id) // Ahora el ID será el correcto
  }

  // Función para confirmar la reserva
  const confirmarReserva = () => {
    if (canchaSeleccionada === null) {
      alert("Por favor selecciona una cancha")
      return
    }

    const total = precios[deporteSeleccionado] * duracion

    setCanchasReservadas({
      ...canchasReservadas,
      [deporteSeleccionado]: [...canchasReservadas[deporteSeleccionado], canchaSeleccionada],
    })

    // Añadir al historial de reservas
    setReservas([
      ...reservas,
      {
        deporte: deporteSeleccionado,
        cancha: canchaSeleccionada,
        duracion: duracion,
        total: total,
      },
    ])

    // Resetear la selección
    setCanchaSeleccionada(null)

    // Mostrar mensaje de confirmación
    alert(`¡Reserva confirmada! Cancha ${canchaSeleccionada} de ${deporteSeleccionado} por ${duracion} hora(s)`)
  }

  // Función para cambiar la duración
  const cambiarDuracion = (nuevaDuracion) => {
    if (nuevaDuracion >= 1 && nuevaDuracion <= 5) {
      setDuracion(nuevaDuracion)
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Sistema de Reserva de Canchas Deportivas</h1>

      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <SelectorDeporte
                deporteSeleccionado={deporteSeleccionado}
                setDeporteSeleccionado={setDeporteSeleccionado}
                setCanchaSeleccionada={setCanchaSeleccionada}
              />
            </div>
            <div className="card-body">
              <PlanoDeportivo
                deporteSeleccionado={deporteSeleccionado}
                canchaSeleccionada={canchaSeleccionada}
                canchasReservadas={canchasReservadas[deporteSeleccionado]}
                seleccionarCancha={seleccionarCancha}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <ResumenReserva
            deporteSeleccionado={deporteSeleccionado}
            canchaSeleccionada={canchaSeleccionada}
            duracion={duracion}
            cambiarDuracion={cambiarDuracion}
            precio={precios[deporteSeleccionado]}
            confirmarReserva={confirmarReserva}
            reservas={reservas}
          />
        </div>
      </div>
    </div>
  )
}

