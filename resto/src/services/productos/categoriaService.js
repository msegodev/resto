import axios from 'axios';

// Define la URL de tu API backend
const API_URL = 'http://localhost:8000'; // Asegúrate de que este sea el endpoint correcto

// Función para crear una nueva categoría
export const crearCategoria = async (categoria) => {
  try {
    const response = await axios.post(`${API_URL}/categorias/`, categoria);
    return response.data; // Devuelve la categoría creada
  } catch (error) {
    console.error("Error creando la categoría:", error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

// Función para obtener una categoría por su ID
export const obtenerCategoriaPorId = async (categoriaId) => {
  try {
    const response = await axios.get(`${API_URL}/categorias/${categoriaId}`);
    return response.data; // Devuelve la categoría encontrada
  } catch (error) {
    console.error("Error obteniendo la categoría:", error);
    throw error;
  }
};

// Función para listar todas las categorías con paginación
export const listarCategorias = async (skip = 0, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/categorias`, {
      params: { skip, limit }
    });
    return response.data; // Devuelve la lista de categorías
  } catch (error) {
    console.error("Error obteniendo las categorías:", error);
    throw error;
  }
};

// Función para eliminar una categoría por su ID
export const eliminarCategoria = async (categoriaId) => {
  try {
    const response = await axios.delete(`${API_URL}/categorias/${categoriaId}`);
    return response.data; // Devuelve el mensaje de confirmación
  } catch (error) {
    console.error("Error eliminando la categoría:", error);
    throw error;
  }
};
