import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/layout/Header";
import Tabs from "../../components/layout/TabComponent";

const Section = ({ id, title, children }) => {
  return (
    <Box id={id} py={8} px={4}>
      <Heading size="lg" mb={4}>
        {title}
      </Heading>
      <Text>{children}</Text>
    </Box>
  );
};

const MenuPreviewPage = () => {
  const sections = [
    { id: "most-sold", label: "Lo más vendido", content: "Contenido 1" },
    { id: "burgers", label: "Hamburguesas", content: "Contenido 2" },
    { id: "fries", label: "Papas fritas", content: "Contenido 3" },
  ];

  return (
    <Flex bgColor="#2d2c36">
      <Box w="3xl" m="auto">
        <Header />
        <Alert
          status="error"
          color="white"
          bgColor="#f64868"
          flexDirection="row"
          alignItems="center"
          gap={2}
        >
          <AlertIcon color="white" boxSize="40px" />

          <VStack w={"full"} align={"flex-start"}>
            <AlertTitle fontSize="lg">
              El local está temporalmente cerrado.
            </AlertTitle>
            <AlertDescription>
              horarios de atencion de 19:30 a 23:00hs.
            </AlertDescription>
          </VStack>
        </Alert>

        <Tabs sections={sections} />
        <Box mt="100px">
          {" "}
          {/* Espacio para el header y las tabs */}
          {sections.map((section) => (
            <Section key={section.id} id={section.id} title={section.label}>
              {section.content}
            </Section>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default MenuPreviewPage;
