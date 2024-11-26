import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const PedidosFinalizadosPage = () => {
  return (
    <Box px={"12"}>
      <Heading mb={"10"} fontWeight={"black"}>
        Pedidos finalizados
      </Heading>

      <TableContainer>
        <Table variant="simple" bgColor={"white"} rounded={6}>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Pedido</Th>
              <Th>Fecha</Th>
              <Th>Cliente</Th>
              <Th>Canal</Th>
              <Th>Estado</Th>
              <Th>Total</Th>
              <Th>Método de pago</Th>
              <Th>Cobrado</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Pedido</Td>
              <Td>10-20-24 11:34</Td>
              <Td>Carlos</Td>
              <Td>Delivery</Td>
              <Td>Entregado</Td>
              <Td>100.000</Td>
              <Td>Transferencia</Td>
              <Td>Si</Td>
            </Tr>
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PedidosFinalizadosPage;
