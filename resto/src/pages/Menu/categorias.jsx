import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Heading,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import CategoriasModal from "./modals";

const CategoriasPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={"12"}>
      <HStack mb={"10"} justify={"space-between"} alignItems={"center"}>
        <Heading fontWeight={"black"}>Categorías</Heading>

        <Button onClick={onOpen}>Agregar</Button>
      </HStack>

      <Alert
        status="info"
        variant="left-accent"
        flexDirection="row"
        alignItems="center"
        gap={6}
        rounded={6}
        // justifyContent="center"
        // textAlign="center"
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

      <CategoriasModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default CategoriasPage;