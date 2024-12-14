import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { formatNumberToARS } from "../../helpers";
import API_URL from "../../config";
import { FaCheck, FaEllipsisV } from "react-icons/fa";
const CardProductos = ({ producto, index, preview, onClick }) => {
  return (
    <Card key={index} w={"lg"} h={"140"}>
      <HStack align="start">
        <CardHeader p={2}>
          <Box h={120}>
            <Image
              rounded="xl"
              w="120px"
              objectFit="cover"
              src={producto.imagen ? `${API_URL}${producto.imagen}` : preview}
            />
          </Box>
        </CardHeader>

        <CardBody py={2} h="full" pl={0}>
          <Flex direction={"column"} h="full" justify={"space-between"}>
            <HStack justify={"space-between"}>
              <Text>{producto.nombre}</Text>
              <Text>$ {formatNumberToARS(producto.valor_precio)}</Text>
            </HStack>

            <VStack align={"start"}>
              <Text fontSize="xs" color="gray.600">
                Disponible en
              </Text>

              <Flex w={"full"} justify={"space-between"}>
                <HStack>
                  {producto.disponible_en &&
                    producto.disponible_en.map((disponibilidad, index) => (
                      <Tag
                        key={index}
                        size="sm"
                        variant="outline"
                        rounded="full"
                        colorScheme="purple"
                        gap={2}
                        textTransform={"capitalize"}
                      >
                        <FaCheck />
                        {disponibilidad}
                      </Tag>
                    ))}
                </HStack>

                <HStack>
                  <Popover>
                    <PopoverTrigger>
                      <IconButton
                        size="xs"
                        aria-label="Menu"
                        colorScheme="purple"
                        variant="outline"
                        icon={<FaEllipsisV />}
                      />
                    </PopoverTrigger>
                    <PopoverContent w={"3xs"}>
                      <PopoverArrow />
                      <PopoverBody>
                        <Button
                          onClick={() => onClick(producto.id)}
                          variant={"ghost"}
                        >
                          Eliminar producto
                        </Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </HStack>
              </Flex>
            </VStack>
          </Flex>
        </CardBody>
      </HStack>
    </Card>
  );
};

export default CardProductos;
