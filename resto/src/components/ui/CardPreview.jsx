import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import preview from "../../assets/preview.png";
import { formatNumberToARS } from "../../helpers";

const CardPreview = ({ previewImage, nombre, precio, descripcion }) => {
  return (
    <>
      <Tag colorScheme="red">VISTA PREVIA EN LISTADO</Tag>
      <Card w={"lg"}>
        <HStack align={"start"}>
          <CardHeader py={3} pl={3} pr={0}>
            <Box w={120}>
              <Image
                h={120}
                rounded="xl"
                objectFit="cover"
                src={previewImage || preview}
              />
            </Box>
          </CardHeader>

          <CardBody pl={0}>
            <HStack justify={"space-between"}>
              <Text>{nombre}</Text>
              <Text fontWeight={600}>
                {precio && `$ ${formatNumberToARS(precio)}`}
              </Text>
            </HStack>
            <Text fontSize="xs" color="gray.600">
              {descripcion}
            </Text>
          </CardBody>
        </HStack>
      </Card>
    </>
  );
};

export default CardPreview;
