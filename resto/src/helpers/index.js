const obtenerFechaActual = () => {
    const fecha = new Date();
    
    // Configuración para formatear la fecha en español
    const opciones = {
      weekday: 'long',    // Nombre completo del día (martes)
      day: 'numeric',      // Día del mes (26)
      month: 'long',       // Nombre completo del mes (noviembre)
      year: 'numeric',     // Año completo (2024)
    };
    
    // Formatear la fecha en español
    const fechaFormateada = new Intl.DateTimeFormat('es-ES', opciones).format(fecha);
    
    // Reemplazar solo la primera coma para obtener el formato deseado
    return fechaFormateada.replace(' de ', ' ').replace(',', ',');
  };
  
  console.log(obtenerFechaActual());
  // Ejemplo de salida: "martes, 26 de noviembre de 2024"
  
  
export {obtenerFechaActual}