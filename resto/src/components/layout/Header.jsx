import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { LuInfo, LuMapPin, LuShare2 } from "react-icons/lu";
import bg from "../../assets/mtbg.jpg";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Box>
      <Text
        pos="relative"
        textAlign="center"
        fontSize="xl"
        color="white"
        fontWeight="bold"
      >
        La Cantina Berisso
      </Text>

      <Box
        bg="gray.900"
        zIndex="sticky"
        p={4}
        boxShadow="md"
        bgImage={bg}
        bgPos="center"
      >
        <Box pos="relative" top="0" left="0" w="20">
          <Image src={logo} />
        </Box>

        <HStack>
          <Button h="12" colorScheme="blackAlpha">
            <LuInfo />
          </Button>
          <Button h="12" colorScheme="blackAlpha">
            <LuMapPin />
          </Button>
          <Button h="12" colorScheme="blackAlpha">
            <LuShare2 />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
