        import Cancha from "./cancha"

        const PlanoDeportivo = ({ deporteSeleccionado, canchaSeleccionada, canchasReservadas, seleccionarCancha }) => {
        // Configuración de canchas por deporte
        const configuracionCanchas = {
            futbol: { filas: 2, columnas: 3 },
            baloncesto: { filas: 3, columnas: 2 },
            tenis: { filas: 4, columnas: 1 },
        }

        const { filas, columnas } = configuracionCanchas[deporteSeleccionado]

        // Generar filas de canchas
        const generarFilas = () => {
            const filasJSX = []
            let canchaId = 1

            for (let i = 0; i < filas; i++) {
            const columnasCanchas = []

            for (let j = 0; j < columnas; j++) {
                const idActual = canchaId 
                columnasCanchas.push(
                <div className="col" key={`cancha-${idActual}`}>
                    <Cancha
                    id={idActual}
                    seleccionada={canchaSeleccionada === idActual}
                    reservada={canchasReservadas.includes(idActual)}
                    onClick={() => seleccionarCancha(idActual)} 
                    deporte={deporteSeleccionado}
                    />
                </div>
                )
                canchaId++
            }

            filasJSX.push(
                <div className="row mb-3" key={`fila-${i}`}>
                {columnasCanchas}
                </div>
            )
            }

            return filasJSX
        }

        return (
            <div className="plano-deportivo">
            <h3 className="text-center mb-4">
                Canchas de {deporteSeleccionado.charAt(0).toUpperCase() + deporteSeleccionado.slice(1)}
            </h3>
            <div className="container">{generarFilas()}</div>
            </div>
        )
        }

        export default PlanoDeportivo
