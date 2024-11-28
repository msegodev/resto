import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { listarProductosPorCategoria } from "../../services/productos/productoService";
import { listarCategorias } from "../../services/productos/categoriaService";

const ProductosPage = () => {
  const [productos, setProductos] = useState();
  const [categorias, setCategorias] = useState([]);
  const [currentCategoria, setCurrentCategoria] = useState("");
  console.log(productos);

  const handleChange = (e) => {
    const { value } = e.target;
    setCurrentCategoria(value);
  };

  useEffect(() => {
    const getCategorias = async () => {
      let data = await listarCategorias();
      setCategorias(data);
    };

    getCategorias();
  }, []);

  useEffect(() => {
    const getProductos = async () => {
      const data = await listarProductosPorCategoria(currentCategoria);
      setProductos(data);
    };

    currentCategoria && getProductos();
  }, [currentCategoria]);
  return (
    <Box px={"12"}>
      <HStack mb={"10"} justify={"space-between"} alignItems={"center"}>
        <Heading fontWeight={"black"}>Productos</Heading>

        <NavLink
          to="/menu/productos/agregar"
          style={({ isActive }) => ({
            color: isActive ? "teal" : "black",
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
          })}
        >
          <Button>Agregar</Button>
        </NavLink>
      </HStack>

      <Select
        placeholder="Seleccione una categoria"
        defaultValue={null}
        onChange={handleChange}
        value={currentCategoria}
        bg={"white"}
        w="2xs"
      >
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria.id}>
            {categoria.nombre}
          </option>
        ))}
      </Select>

      <Box>
        {productos &&
          productos.map((producto, index) => (
            <Card key={index} w={"lg"}>
              <HStack>
                <CardHeader>
                  <Box>IMG</Box>
                </CardHeader>

                <CardBody>
                  <HStack justify={"space-between"}>
                    <Text>{producto.nombre}</Text>
                    <Text>
                      {producto.valor_precio &&
                        `$${parseFloat(producto.valor_precio).toFixed(2)}`}
                    </Text>
                  </HStack>
                  <Text>{producto.descripcion}</Text>
                </CardBody>
              </HStack>
            </Card>
          ))}
      </Box>
    </Box>
  );
};

export default ProductosPage;
