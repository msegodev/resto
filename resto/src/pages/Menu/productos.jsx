import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ProductosPage = () => {
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
    </Box>
  );
};

export default ProductosPage;
