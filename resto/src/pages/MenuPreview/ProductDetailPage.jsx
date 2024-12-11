import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { formatNumberToARS } from "../../helpers";
import Header from "../../components/layout/Header";

const ProductDetailPage = () => {
  return (
    <Box minH="100vh" bgColor="#2d2c36" color="white">
      <Flex>
        <Box m="auto" w="3xl">
          <Header />

          <Card shadow="none" color="white" bg="transparent">
            <CardHeader>
              <Heading size="lg">Simple Cheddar</Heading>
            </CardHeader>
            <CardBody py={0}>
              <Text>
                Medallón 125g Cheddar con Papas tradicionales McCain SureCrisp
                (súpercrocante).
              </Text>
            </CardBody>
            <CardFooter justify="flex-end">
              <Text fontWeight="bold">$ {formatNumberToARS(21999)}</Text>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductDetailPage;
