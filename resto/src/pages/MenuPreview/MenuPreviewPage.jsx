// import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Divider,
  Flex,
  Heading,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Header from "../../components/layout/Header";
// import menu from "./data";
import ModalInfo from "./ModalInfo";
import OrderInfoCard from "./components/OrderInfoCard";
import ProductsByCategoryList from "./components/ProductsByCategoryList";
import { useEffect, useState } from "react";
import { obtenerMenuCompleto } from "../../services/productos/productoService";

const MenuPreviewPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menu, setMenu] = useState([]);
  // TODO: CONTROL DE TABS, AGREGAR PROP AL COMPONENT
  // const [tabIndex, setTabIndex] = useState(0);

  // const handleTabChange = (e) => {
  //   setTabIndex(e.target.value);
  // };

  console.log(menu);

  useEffect(() => {
    const cargarMenu = async () => {
      try {
        const menu = await obtenerMenuCompleto();
        setMenu(menu);
      } catch (error) {
        console.error("Error cargando el menú:", error);
      }
    };

    cargarMenu();
  }, []);

  return (
    <Box minH="100vh" bgColor="#2d2c36">
      <Flex>
        <Box w="3xl" m="auto">
          <Header onOpen={onOpen} showIcons showLogo />
          <Alert
            status="error"
            color="white"
            bgColor="#f64868"
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            <AlertIcon color="white" boxSize="36px" />

            <VStack w={"full"} align={"flex-start"}>
              <AlertTitle fontSize="lg">
                El local está temporalmente cerrado.
              </AlertTitle>
              <AlertDescription>
                horarios de atencion de 19:30 a 23:00hs.
              </AlertDescription>
            </VStack>
          </Alert>

          <OrderInfoCard />

          <Box>
            {menu.map((item, index) => {
              return (
                <Box key={index} color="white">
                  <Heading size="lg" my={2}>
                    {item.categoria}
                  </Heading>
                  <Divider />

                  <Box>
                    {item.items &&
                      item.items.map((product, index) => (
                        <NavLink
                          key={index}
                          to={`/preview/product/${product.id}`}
                        >
                          <ProductsByCategoryList product={product} />
                        </NavLink>
                      ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>
      <ModalInfo isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default MenuPreviewPage;
