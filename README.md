# Proyecto: Plano Interactivo de Mesas

## Descripción
Este proyecto es una interfaz web con react que permite ver los estados de cada cancha y de diferentes deportes, reservar  y ver el total por el uso de las mismas.



## Funcionalidades implementadas

1. Selección de deportes: Fútbol, Baloncesto y Tenis, cada uno con diferente distribución de canchas.
2. Visualización de canchas: Organizadas en filas y columnas según el deporte.
3. Estados de las canchas:

1. Disponible (azul)
2. Seleccionada (verde)
3. Reservada (rojo)



4. Gestión de reservas:

1. Selección de cancha
2. Ajuste de duración (1-5 horas)
3. Cálculo automático del precio total
4. Confirmación de reserva



5. Validaciones:

1. No permite reservar canchas ya reservadas
2. Requiere seleccionar una cancha antes de confirmar


## Estructura del proyecto
##deportes-react/
##│
##├── app/
##│   ├── page.jsx                 # Página principal de la aplicación
##│   ├── layout.jsx              # Layout principal
##│   └── globals.css             # Estilos globales
##│
##├── components/
##│   ├── selector-deporte.jsx    # Componente para selección de deportes
##│   ├── plano-deportivo.jsx     # Componente que muestra el plano de canchas
##│   ├── cancha.jsx             # Componente individual de cancha
##│   └── resumen-reserva.jsx    # Componente de resumen y confirmación
##│
##├── public/                     # Archivos públicos estáticos
##│
##├── node_modules/              # Dependencias instaladas
##│
##├── package.json              # Configuración del proyecto y dependencias
##├── package-lock.json        # Versiones exactas de dependencias
##├── .gitignore              # Archivos ignorados por git
##└── README.md               # Documentación del proyecto


##Derechos de desarrollo : Jesus Ernesto Sanabria Sibrian
