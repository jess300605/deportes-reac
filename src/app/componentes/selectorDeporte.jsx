const SelectorDeporte = ({ deporteSeleccionado, setDeporteSeleccionado, setCanchaSeleccionada }) => {
    const cambiarDeporte = (deporte) => {
      setDeporteSeleccionado(deporte)
      setCanchaSeleccionada(null) // Resetear la cancha seleccionada al cambiar de deporte
    }
  
    return (
      <div className="d-flex justify-content-center mb-3">
        <div className="btn-group" role="group" aria-label="Selector de deportes">
          <button
            type="button"
            className={`btn ${deporteSeleccionado === "futbol" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => cambiarDeporte("futbol")}
          >
            Fútbol
          </button>
          <button
            type="button"
            className={`btn ${deporteSeleccionado === "baloncesto" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => cambiarDeporte("baloncesto")}
          >
            Baloncesto
          </button>
          <button
            type="button"
            className={`btn ${deporteSeleccionado === "tenis" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => cambiarDeporte("tenis")}
          >
            Tenis
          </button>
        </div>
      </div>
    )
  }
  
  export default SelectorDeporte
  
  