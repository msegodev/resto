import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { LuInfo, LuMapPin, LuShare2 } from "react-icons/lu";
import bg from "../../assets/mtbg.jpg";
import logo from "../../assets/logo.png";

const Header = ({ onOpen, showIcons = false, showLogo = false }) => {
  return (
    <VStack
      zIndex="sticky"
      p={4}
      boxShadow="md"
      bgImage={showLogo ? bg : null}
      bgPos="center"
      align="flex-start"
      gap="6"
      shadow="none"
    >
      <HStack justify={!showLogo ? "center" : "normal"}>
        {showLogo && (
          <Box w="2xs">
            <Box pos="relative" top="0" left="0" w="20">
              <Image src={logo} />
            </Box>
          </Box>
        )}

        <Text pos="relative" fontSize="xl" color="white" fontWeight="bold">
          La Burguesita
        </Text>
      </HStack>

      {showIcons && (
        <HStack>
          <Button onClick={onOpen} h="12" colorScheme="blackAlpha">
            <LuInfo />
          </Button>
          <Button h="12" colorScheme="blackAlpha">
            <LuMapPin />
          </Button>
          <Button h="12" colorScheme="blackAlpha">
            <LuShare2 />
          </Button>
        </HStack>
      )}
    </VStack>
  );
};

export default Header;
