import {
  Flex,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react/breadcrumb";
import { LuHome } from "react-icons/lu";
import { obtenerFechaActual } from "../../helpers";

const Navbar = () => {
  return (
    <Flex as="nav" bg="" align="center" justify="space-between" p="4" h="60px">
      <Stack direction={"row"} alignItems={"center"}>
        <LuHome />
        <Breadcrumb separator=">">
          <BreadcrumbSeparator>{"/"}</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>Tablero</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Stack>
      <Spacer />

      <Stack textAlign={"right"}>
        <Stat>
          <StatNumber>
            {new Date().toLocaleString("es-AR", {
              hour12: false,
              hour: "numeric",
              minute: "numeric",
            })}
          </StatNumber>
          <StatLabel>{obtenerFechaActual()}</StatLabel>
        </Stat>
      </Stack>
    </Flex>
  );
};

export default Navbar;
