const ResumenReserva = ({
    deporteSeleccionado,
    canchaSeleccionada,
    duracion,
    cambiarDuracion,
    precio,
    confirmarReserva,
    reservas,
  }) => {
    // Calcular el total
    const total = precio * duracion
  
    return (
      <>
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Resumen de Reserva</h4>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <h5>Deporte</h5>
              <p className="fs-5">{deporteSeleccionado.charAt(0).toUpperCase() + deporteSeleccionado.slice(1)}</p>
            </div>
  
            <div className="mb-3">
              <h5>Cancha</h5>
              <p className="fs-5">{canchaSeleccionada ? `Cancha ${canchaSeleccionada}` : "No seleccionada"}</p>
            </div>
  
            <div className="mb-3">
              <h5>Duración</h5>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => cambiarDuracion(duracion - 1)}
                  disabled={duracion <= 1}
                >
                  -
                </button>
                <span className="mx-3 fs-5">{duracion} hora(s)</span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => cambiarDuracion(duracion + 1)}
                  disabled={duracion >= 5}
                >
                  +
                </button>
              </div>
            </div>
  
            <div className="mb-4">
              <h5>Precio</h5>
              <p className="fs-5">${precio} / hora</p>
            </div>
  
            <div className="alert alert-info">
              <h4 className="alert-heading">Total a pagar</h4>
              <p className="fs-3 fw-bold">${total}</p>
            </div>
  
            <button
              className="btn btn-success w-100 mt-3 py-2"
              onClick={() => confirmarReserva(total)}
              disabled={canchaSeleccionada === null}
            >
              Confirmar Reserva
            </button>
          </div>
        </div>
  
     
        <div className="card">
          <div className="card-header bg-secondary text-white">
            <h4 className="mb-0">Mis Reservas</h4>
          </div>
          <div className="card-body">
            {reservas.length === 0 ? (
              <p className="text-muted">No tienes reservas activas</p>
            ) : (
              <div className="reservas-list">
                {reservas.map((reserva, index) => (
                  <div key={index} className="alert alert-light border mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">
                          Cancha {reserva.cancha} - {reserva.deporte.charAt(0).toUpperCase() + reserva.deporte.slice(1)}
                        </h6>
                        <p className="mb-0 text-muted">
                          Duración: {reserva.duracion} hora(s) | Total: ${reserva.total}
                        </p>
                      </div>
                      <span className="badge bg-danger">Reservada</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
  
  export default ResumenReserva
  
  