// productoService.js

import axios from 'axios';

// Define la URL de tu API backend
const API_URL = 'http://localhost:8000'; // Asegúrate de que este sea el endpoint correcto

// Función para crear un producto
export const crearProducto = async (producto) => {
  try {
    // Realiza la solicitud POST al backend
    const response = await axios.post(`${API_URL}/productos/`, producto);
    return response.data; // Devuelve el producto creado
  } catch (error) {
    console.error("Error creando el producto:", error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};
