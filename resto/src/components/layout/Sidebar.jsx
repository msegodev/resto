import {
  Box,
  VStack,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link,
  Divider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  LuBox,
  LuLayoutDashboard,
  LuPrinter,
  LuShoppingBag,
  LuShoppingCart,
} from "react-icons/lu";

const Sidebar = () => {
  return (
    <Box
      minW="240px"
      bg="white"
      boxShadow="md"
      h="100vh"
      position="relative"
      top="0"
      left="0"
      overflowY="auto"
    >
      <VStack align="start" p="2">
        <Text fontSize="xl" fontWeight="bold">
          La Cantina
        </Text>

        <Divider />

        <Box w={"full"}>
          <Flex gap="4" alignItems="center" p={4}>
            <LuLayoutDashboard size="30" />
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                color: isActive ? "teal" : "black",
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: "none",
              })}
            >
              Tablero
            </NavLink>
          </Flex>
        </Box>

        {/* Pedidos Accordion */}
        <Accordion w={"full"} allowMultiple>
          <AccordionItem>
            <AccordionButton p={4} py={6}>
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <LuShoppingCart size="30" style={{ marginRight: 8 }} />
                Pedidos
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack align="start" spacing={2}>
                <NavLink
                  to="/pedidos/activos"
                  style={({ isActive }) => ({
                    color: isActive ? "teal" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                  })}
                >
                  Activos
                </NavLink>
                <Link href={undefined}>Salones</Link>
                <Link href={undefined}>Programados</Link>
                <NavLink
                  to="/pedidos/finalizados"
                  style={({ isActive }) => ({
                    color: isActive ? "teal" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                  })}
                >
                  Finalizados
                </NavLink>
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} py={6}>
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <LuShoppingBag size="30" style={{ marginRight: 8 }} />
                Mi menú
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack align="start" spacing={2}>
                <NavLink
                  to="/menu/categorias"
                  style={({ isActive }) => ({
                    color: isActive ? "teal" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                  })}
                >
                  Categorías
                </NavLink>
                <NavLink
                  to="/menu/productos"
                  style={({ isActive }) => ({
                    color: isActive ? "teal" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                  })}
                >
                  Productos
                </NavLink>
                <NavLink
                  to="/menu/adicionales"
                  style={({ isActive }) => ({
                    color: isActive ? "teal" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                  })}
                >
                  Adicionales
                </NavLink>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box w={"full"}>
          <Flex gap="2" alignItems="center" p={4}>
            <LuPrinter size="30" />
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "teal" : "black",
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: "none",
              })}
            >
              Gestión de cajas
            </NavLink>
          </Flex>
        </Box>

        <Divider />

        <Box w={"full"}>
          <Flex gap="2" alignItems="center" p={4}>
            <LuBox size="30" />
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "teal" : "black",
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: "none",
              })}
            >
              Stock
            </NavLink>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;
