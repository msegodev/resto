import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { formatNumberToARS } from "../../helpers";
import Header from "../../components/layout/Header";

const ProductDetailPage = () => {
  return (
    <Box minH="100vh" bgColor="#2d2c36" color="white">
      <Flex>
        <Box m="auto" w="3xl">
          <Header />
          <Heading>Simple Cheddar</Heading>
          <Text>
            Medallón 125g Cheddar con Papas tradicionales McCain SureCrisp
            (súpercrocante).
          </Text>

          <Text>$ {formatNumberToARS(21999)}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductDetailPage;
