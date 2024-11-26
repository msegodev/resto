import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Stack,
  Tag,
} from "@chakra-ui/react";

const PedidosPage = () => {
  return (
    <Box px={"12"}>
      <HStack mb={"10"} justify={"space-between"} alignItems={"center"}>
        <Heading fontWeight={"black"}>
          Pedidos activos
        </Heading>

        <HStack>
          <Button>Recargar</Button>
          <Button>Nuevo pedido</Button>
        </HStack>
      </HStack>

      <HStack mb={"10"}>
        <HStack>
          <Tag colorScheme="red">CAJA</Tag>
          <Tag colorScheme="red">Cerrada</Tag>
        </HStack>

        <HStack>
          <Tag colorScheme="red">PEDIDOS TOTALES</Tag>
          <Tag colorScheme="red">Sin pedidos</Tag>
        </HStack>
      </HStack>

      <HStack>
        <Card w={"xs"} mb={"10"} h={"xl"}>
          <CardHeader>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Heading size="md">Pendiente</Heading>
              <Tag colorScheme="red">0</Tag>
              {/* <Button>Ver Informes</Button> */}
            </Stack>
          </CardHeader>

          <Divider />

          <CardBody></CardBody>
        </Card>

        <Card w={"xs"} mb={"10"} h={"xl"}>
          <CardHeader>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Heading size="md">Confirmado</Heading>
              <Tag colorScheme="red">0</Tag>

              {/* <Button>Ver Informes</Button> */}
            </Stack>
          </CardHeader>

          <Divider />

          <CardBody></CardBody>
        </Card>

        <Card w={"xs"} mb={"10"} h={"xl"}>
          <CardHeader>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Heading size="md">En preparación</Heading>
              <Tag colorScheme="red">0</Tag>

              {/* <Button>Ver Informes</Button> */}
            </Stack>
          </CardHeader>

          <Divider />

          <CardBody></CardBody>
        </Card>

        <Card w={"xs"} mb={"10"} h={"xl"}>
          <CardHeader>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Heading size="md">Enviado/Listo</Heading>
              <Tag colorScheme="red">0</Tag>

              {/* <Button>Ver Informes</Button> */}
            </Stack>
          </CardHeader>

          <Divider />

          <CardBody></CardBody>
        </Card>
      </HStack>
    </Box>
  );
};

export default PedidosPage;
