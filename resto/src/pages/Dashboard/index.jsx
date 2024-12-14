import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import qrcode from "../../assets/qrcode.png";
import { NavLink } from "react-router-dom";

const cards = [
  {
    venta: 0,
    tiempo: "Dia actual",
  },
  {
    venta: 0,
    tiempo: "Siete días atrás",
  },
  {
    venta: 0,
    tiempo: "Mes corriente",
  },
  {
    venta: 0,
    tiempo: "Mes pasado",
  },
  {
    venta: 0,
    tiempo: "Dia anterior",
  },
];

const DashboardPage = () => {
  return (
    <Box px={"12"}>
      <Heading mb={"10"}>Tablero</Heading>
      <Text fontSize="2xl" mb={"10"}>Bienvenid@, Burguesita!</Text>

      <Wrap spacing={"16"}>
        <Card w={"lg"} mb={"10"}>
          <CardHeader>
            <Stack direction={"row"} align={"center"} justifyContent={"space-between"}>
              <Heading size="md" color="#656566">
                Tus ventas
              </Heading>

              <Button h={"8"} colorScheme="purple" variant={"outline"} isDisabled>
                Ver Informes
              </Button>
            </Stack>
          </CardHeader>

          <Divider />

          <CardBody>
            <Wrap>
              {cards.map((card, index) => {
                return (
                  <Stat key={index}>
                    <VStack w={"3xs"}>
                      <StatNumber>{card.venta}</StatNumber>
                      <StatLabel>{card.tiempo}</StatLabel>
                    </VStack>
                  </Stat>
                );
              })}
            </Wrap>
          </CardBody>
        </Card>

        <Card w={"lg"}>
          <CardHeader>
            <Stack
              direction={"row"}
              align={"center"}
              justifyContent={"space-between"}
            >
              <Heading size="md" color={"#656566"}>
                Mi Menú
              </Heading>

              <HStack>
                <NavLink target="_blank" to={"/preview"}>
                  <Button h="8" variant="outline" colorScheme="purple">
                    Vista previa
                  </Button>
                </NavLink>
                <Button h="8" variant="outline" colorScheme="purple">
                  Compartir
                </Button>
              </HStack>
            </Stack>
          </CardHeader>

          <Divider />

          <CardBody>
            <Wrap>
              <VStack spacing={"10"}>
                <NavLink target="_blank" to={"/preview"}>
                  <Button h={"8"} variant="outline" colorScheme="purple">
                    Menú Online
                  </Button>
                </NavLink>
                <Image src={qrcode}></Image>
                <Text>
                  Descarga el código QR, previsualiza tu catálogo o comparte el
                  link en otras plataformas
                </Text>
              </VStack>
            </Wrap>
          </CardBody>
        </Card>
      </Wrap>
    </Box>
  );
};

export default DashboardPage;
