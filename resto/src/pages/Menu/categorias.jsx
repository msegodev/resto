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
  Tag,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import CategoriasModal from "./modals";
import {
  crearCategoria,
  listarCategorias,
} from "../../services/productos/categoriaService";
import { useEffect, useState } from "react";

const CategoriasPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categorias, setCategorias] = useState();

  const getCategorias = async () => {
    let data = await listarCategorias();
    setCategorias(data);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  // Función onSubmit que se pasa al modal
  const handleCreateCategoria = async (data) => {
    try {
      await crearCategoria(data);
      getCategorias();
    } catch (error) {
      console.error("Error al crear la categoría:", error);
    }
  };

  return (
    <Box px={"12"}>
      <HStack mb={"10"} justify={"space-between"} alignItems={"center"}>
        <Heading fontWeight={"black"}>Categorías</Heading>

        <Button onClick={onOpen}>Agregar</Button>
      </HStack>

      {!categorias && (
        <Alert
          status="info"
          variant="left-accent"
          flexDirection="row"
          alignItems="center"
          gap={6}
          rounded={6}
        >
          <AlertIcon boxSize="40px" mr={0} />

          <VStack w={"full"} align={"flex-start"}>
            <AlertTitle mt={4} mb={1} fontSize="lg">
              El catálogo se encuentra vacío
            </AlertTitle>
            <AlertDescription>
              Para poder crear un producto primero debe crear una categoría. Una
              categoría es una agrupación de productos.
            </AlertDescription>
          </VStack>
        </Alert>
      )}

      {categorias && (
        <Box w={"2xl"}>
          <VStack gap={4}>
            {categorias.map((categoria, index) => (
              <Card w={"full"} key={index}>
                <HStack>
                  <CardHeader>
                    <Text>{categoria.nombre}</Text>
                  </CardHeader>
                  <CardBody>
                    <Tag colorScheme="orange">SIN PRODUCTOS</Tag>
                  </CardBody>
                </HStack>
              </Card>
            ))}
          </VStack>
        </Box>
      )}
      <CategoriasModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleCreateCategoria}
      />
    </Box>
  );
};

export default CategoriasPage;
