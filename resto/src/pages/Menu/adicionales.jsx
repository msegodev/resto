import { Box, Button, Heading, HStack } from "@chakra-ui/react";

const AdicionalesPage = () => {
  return (
    <Box px={"12"}>
      <HStack mb={"10"} justify={"space-between"} alignItems={"center"}>
        <Heading fontWeight={"black"}>Adicionales</Heading>

        <Button>Agregar</Button>
      </HStack>
    </Box>
  );
};

export default AdicionalesPage;
