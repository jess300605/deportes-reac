const Cancha = ({ id, seleccionada, reservada, onClick, deporte }) => {
    // Determinar el estado visual de la cancha
    let estadoClase = "btn-primary"
    let estadoTexto = "Disponible"
  
    if (reservada) {
      estadoClase = "btn-danger" // Cambiado de warning a danger
      estadoTexto = "Reservada"
    } else if (seleccionada) {
      estadoClase = "btn-success"
      estadoTexto = "Seleccionada"
    }
  
    // Iconos según el deporte
    const iconos = {
      futbol: "⚽",
      baloncesto: "🏀",
      tenis: "🎾",
    }
  
    return (
      <button className={`btn ${estadoClase} w-100 py-4`} onClick={onClick} disabled={reservada}>
        <div className="d-flex flex-column align-items-center">
          <span className="fs-1">{iconos[deporte]}</span>
          <span className="mt-2">Cancha {id}</span>
          <span className="badge bg-light text-dark mt-2">{estadoTexto}</span>
        </div>
      </button>
    )
  }
  
  export default Cancha
  
  