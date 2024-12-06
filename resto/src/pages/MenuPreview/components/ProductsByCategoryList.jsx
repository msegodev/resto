import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import preview from "../../../assets/preview.png";
import { formatNumberToARS } from "../../../helpers";

const ProductsByCategoryList = ({ product }) => {
  return (
    <Card my="8" bg="transparent" color="white" shadow="none">
      <CardBody p="0">
        <HStack gap="4" align="start">
          <Image src={preview} rounded="2xl" />
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
