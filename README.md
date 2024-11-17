# Singularity Health - Prueba Técnica Frontend

Este proyecto es una aplicación web construida como parte de una prueba técnica para la posición de Desarrollador Frontend en **Singularity Health**. La aplicación incluye tres vistas principales y funcionalidades específicas basadas en los requerimientos establecidos.

## 🖥️ Descripción del Proyecto

La aplicación consta de las siguientes vistas:

1. **Vista de Login**:

   - Validación de formulario con mensajes de error cuando los campos son inválidos.
   - El botón `SIGN IN` permanece deshabilitado hasta que el formulario sea válido.
   - Muestra un indicador de carga durante el proceso de login.
   - Manejo de alertas en caso de que los datos sean correctos o incorrectos

2. **Vista de Home**:

   - Permite navegar por la vista por medio de los items del menu superior.
   - La URL se actualiza dinámicamente para reflejar el contenido mostrado.
   - Botón de logout para finalizar la sesión.

3. **Vista 404**:
   - Página diseñada para mostrarse al acceder a URLs inválidas.
   - El diseño de esta página es personalizado y adaptable.

### Características Adicionales

- **Protección de rutas**: Solo usuarios autenticados pueden acceder a las secciones de la página.
- **Arquitectura Escalable**: Pensada para soportar futuras funcionalidades y mejorar el mantenimiento.
- **Construcción con React**: Implementada con JavaScript para el frontend.


### 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones modernas.
- **Tailwind CSS**: Framework para estilos CSS.

### API Utilizada

- **Login Endpoint**: [https://reqres.in/api/](https://reqres.in/api/)

---

## 🚀 Instalación y Despliegue

Sigue estos pasos para ejecutar y desplegar el proyecto:

### 1. Requisitos Previos

- Node.js (versión 16 o superior)
- npm (versión 7 o superior)

### 2. Clonar el Repositorio

    git clone https://github.com/Plxyz08/PT-Singularity.git
    cd PT-Singularity

### 3. Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

    npm install

### 4. Configurar el Entorno

El proyecto no requiere configuración adicional ya que utiliza la API pública de reqres.in. Asegúrate de tener conexión a internet para consumir los endpoints.

### 5. Iniciar el Proyecto

Para iniciar el servidor de desarrollo, utiliza:

    npm run dev
La aplicación estará disponible en http://localhost:3000 (o en el puerto asignado por Vite).

### Desarrollado por Sebastian Muñoz

