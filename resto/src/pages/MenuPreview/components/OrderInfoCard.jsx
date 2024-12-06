import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight, FaPersonBiking, FaPersonWalking } from "react-icons/fa6";

const OrderInfoCard = () => (
  <Card mx="4" color="white" bg="#363540" my="6" rounded="3xl">
    <CardHeader p={0}>
      <Flex>
        <Tabs variant="solid-rounded" colorScheme="orange" w="full">
          <TabList>
            <Tab gap={2} fontWeight={400} rounded="xl" w="full" py={4}>
              <FaPersonBiking />
              Delivery
            </Tab>
            <Tab gap={2} fontWeight={400} rounded="xl" w="full">
              <FaPersonWalking />
              Takeaway
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
    </CardHeader>
    <CardBody color="#ababae" py={2}>
      <HStack justify="space-between">
        <Text>Demora estimada</Text>
        <Text>25 min.</Text>
      </HStack>
    </CardBody>

    <CardFooter
      fontWeight={600}
      bgColor="#4d372a"
      roundedBottom="3xl"
      justify="space-between"
    >
      <Text color="#f68848">Consultá el estado de tu pedido</Text>
      <FaArrowRight color="#f68848" />
    </CardFooter>
  </Card>
);

export default OrderInfoCard;
