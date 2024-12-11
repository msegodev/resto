import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { listarProductosPorCategoria } from "../../services/productos/productoService";
import { listarCategorias } from "../../services/productos/categoriaService";
import { formatNumberToARS } from "../../helpers";
import preview from "../../assets/preview.png";

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [currentCategoria, setCurrentCategoria] = useState({});

  const handleChange = (e) => {
    const selectedCategoria = categorias.find(
      (categoria) => categoria.id === parseInt(e.target.value)
    );
    setCurrentCategoria(selectedCategoria || {}); // Actualiza `currentCategoria` con el objeto completo.
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
      const data = await listarProductosPorCategoria(currentCategoria.id);
      setProductos(data);
    };

    if (currentCategoria.id) {
      getProductos();
    }
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
          <Button colorScheme="purple" isDisabled={!categorias.length}>
            Agregar
          </Button>
        </NavLink>
      </HStack>

      <Stack mb={10}>
        <Select
          placeholder="Seleccione una categoria"
          defaultValue={null}
          onChange={handleChange}
          value={currentCategoria.id}
          bg={"white"}
          w="2xs"
        >
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </Select>
      </Stack>

      <Box>
        {!productos.length && (
          <Alert
            status="info"
            variant="left-accent"
            flexDirection="row"
            alignItems="flex-start"
            gap={6}
            rounded={6}
            bg={"white"}
          >
            <AlertIcon boxSize="40px" mr={0} />

            <VStack
              w={"full"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
            >
              <AlertTitle mb={1} fontSize="lg">
                Lista de productos vacía
              </AlertTitle>
              <AlertDescription>
                Cree su primer producto para la categoría
                {currentCategoria.name}
              </AlertDescription>
            </VStack>
          </Alert>
        )}

        {/* <VStack
          w={"full"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <AlertTitle mb={1} fontSize="lg">
            El catálogo se encuentra vacío
          </AlertTitle>
          <AlertDescription>
            Para poder crear un producto primero debe crear una categoría. Una
            categoría es una agrupación de productos.
          </AlertDescription>
        </VStack> */}

        {productos && (
          <VStack gap={4} align={"flex-start"}>
            {productos.map((producto, index) => (
              <Card key={index} w={"lg"}>
                <HStack align="start">
                  <CardHeader p={2}>
                    <Image
                      rounded="xl"
                      w="full"
                      objectFit="cover"
                      src={preview}
                    />
                  </CardHeader>

                  <CardBody py={2} pl={0}>
                    <HStack justify={"space-between"}>
                      <Text>{producto.nombre}</Text>
                      <Text>$ {formatNumberToARS(producto.valor_precio)}</Text>
                    </HStack>
                  </CardBody>
                </HStack>
              </Card>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default ProductosPage;
