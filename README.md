# Trabajo Practico React - App Eventos y Tareas

## Introducción

Esta aplicación es una agenda digital que permite gestionar eventos, tareas y usuarios. Diseñada para facilitar la organización y el seguimiento de actividades, la aplicación ofrece una interfaz intuitiva donde los usuarios pueden visualizar listas, agregar nuevas entradas y consultar detalles relevantes. Es una herramienta ideal para mejorar la productividad y mantener la información centralizada.

---

## Tecnologías utilizadas

### **Frontend**
- **React**: Biblioteca principal para el desarrollo de la interfaz de usuario.
- **React Router**: Para la gestión de rutas y navegación entre diferentes páginas de la aplicación.
- **Material-UI (MUI)**: Librería de componentes para crear una interfaz moderna y responsiva.

### **Backend**
- **API REST**: La aplicación se conecta a una API que proporciona la información de eventos, tareas y usuarios.

### **Hooks y utilidades personalizadas**
- **useFetch**: Hook personalizado para realizar peticiones a la API de manera eficiente y reutilizable.
- **formatDate**: Para el formateo de fechas y horas, asegurando una representación legible y adaptada al idioma español.
- **Services**: Para organizar los diferentes endpoint del CRUD y mantener la modularidad de comunicacion con la API, en caso de agregar mas funcionalidades.

---

## Arquitectura del proyecto

El proyecto sigue una estructura modular que facilita el mantenimiento y la extensión:

```
src/
├── components/
│   ├── Buttons/       # Grupo de Botones
│   ├── HeaderBar/       # Encabezado principal
│   ├── ListMenu/        # Componentes de menú lateral
│   ├── Table/           # Tabla personalizada (CustomTable)
├── hooks/
│   └── useFetch.js      # Hook para consumo de API
├── pages/
│   ├── AppLayout.jsx    # Disposición principal de la app
│   ├── Home.jsx         # Página de inicio
│   ├── UserPage.jsx     # Página de gestión de usuarios
│   ├── TaskPage.jsx     # Página de tareas
│   ├── EventPage.jsx    # Página de eventos
├── services/
│   ├── TaskService.js   # Servicios para tareas
│   ├── EventService.js  # Servicios para eventos
│   ├── UserService.js   # Servicios para usuarios
├── utils/
│   └── formatDate.js    # Utilidad para formatear fechas y horas
├── App.jsx              # Configuración principal de React
└── main.jsx             # Punto de entrada de la aplicación
```

---

## Funcionalidades destacadas

1. **Visualización de datos**:
   - Listas de tareas, eventos y usuarios, cada una con su página dedicada.
   - Tablas interactivas que muestran información relevante con opciones de navegación.

2. **Gestor de rutas**:
   - Implementación de `React Router` para navegar entre las diferentes vistas: Inicio, Tareas, Eventos y Usuarios.

3. **Formato de fechas**:
   - Uso de `Intl.DateTimeFormat` para mostrar las fechas en formato amigable, incluyendo el día de la semana, el mes y la hora.

4. **Reutilización de código**:
   - `useFetch` centraliza las peticiones HTTP y maneja estados de carga, reduciendo redundancia en el código.
   - Componentes reutilizables como `CustomTable` para mostrar listas con diferentes configuraciones.

---

## Uso

1. Navega entre las diferentes vistas utilizando el menú lateral.
2. Consulta las listas de tareas, eventos y usuarios en sus respectivas páginas.
3. Visualiza información organizada en tablas con fechas y horas formateadas.

---

## Mejoras futuras

- Implementación de funcionalidad CRUD (crear, leer, actualizar, eliminar) para tareas, eventos y usuarios.
- Agregar autenticación para proteger rutas y datos sensibles.
- Mejorar la gestión de errores para peticiones fallidas.





