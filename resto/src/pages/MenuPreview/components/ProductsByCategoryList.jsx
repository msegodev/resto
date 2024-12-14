import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatNumberToARS } from "../../../helpers";
import preview from "../../../assets/preview.png";
import API_URL from "../../../config";

const ProductsByCategoryList = ({ product }) => {
  return (
    <Card my="8" bg="transparent" color="white" shadow="none">
      <CardBody p="0">
        <HStack gap="4" align="start">
          <Box w={120}>
            <Image
              src={product.imagen ? `${API_URL}${product.imagen}` : preview}
              rounded="2xl"
            />
          </Box>
          <Stack w="full">
            <HStack justify="space-between">
              <Heading size="md">{product.nombre}</Heading>
              <Heading size="md">
                $ {formatNumberToARS(product.valor_precio)}
              </Heading>
            </HStack>
            <Text color="#ababae">{product.descripcion}</Text>
          </Stack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductsByCategoryList;
