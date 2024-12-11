// productoService.js

import axios from 'axios';

// Define la URL de tu API backend
const API_URL = 'http://localhost:8000/productos'; // Asegúrate de que este sea el endpoint correcto

// Crear un producto
export const crearProducto = async (producto) => {
  try {
    const formData = new FormData();

    for (const key in producto) {
      if (key === "imagen" && producto[key] instanceof FileList) {
        // Si el campo es una imagen y contiene un archivo, lo añadimos
        if (producto[key].length > 0) {
          formData.append(key, producto[key][0]); // Adjunta solo el primer archivo
        }
      } else {
        // Añade todos los demás campos normalmente
        if (key === "sku" && producto[key] === "")  {
          continue
        } else {
          formData.append(key, producto[key])
        }
      }
    }

    const response = await axios.post(`${API_URL}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creando el producto:", error.response?.data || error.message);
    throw error;
  }
};

// Obtener un producto por ID
export const obtenerProducto = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo el producto con ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

// Listar productos con paginación
export const listarProductos = async (skip = 0, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/`, {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error listando los productos:", error.response?.data || error.message);
    throw error;
  }
};

// Obtener productos por categoría
export const listarProductosPorCategoria = async (categoriaId, skip = 0, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/categoria/${categoriaId}`, {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo productos para la categoría ${categoriaId}:`, error.response?.data || error.message);
    throw error;
  }
};

// Obtener menú completo con categorías y productos
export const obtenerMenuCompleto = async () => {
  try {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data; // Devuelve el menú completo en el formato esperado
  } catch (error) {
    console.error("Error obteniendo el menú completo:", error.response?.data || error.message);
    throw error;
  }
};


// Actualizar un producto
export const actualizarProducto = async (id, producto) => {
  try {
    const formData = new FormData();
    for (const key in producto) {
      formData.append(key, producto[key]);
    }

    const response = await axios.put(`${API_URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error actualizando el producto con ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

// Eliminar un producto
export const eliminarProducto = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error eliminando el producto con ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};
