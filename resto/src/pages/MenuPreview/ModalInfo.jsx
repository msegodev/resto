import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuInfo, LuMapPin } from "react-icons/lu";

const ModalInfo = ({ onClose, isOpen, onOpen }) => (
  <Modal
    isCentered
    onClose={onClose}
    isOpen={isOpen}
    motionPreset="slideInBottom"
  >
    <ModalOverlay bg="blackAlpha.700" />
    <ModalContent rounded="2xl" color="white" bg="#2d2c36">
      <ModalHeader>
        <HStack align="center">
          <Heading size="xl">La Burguesita</Heading>
          <ModalCloseButton rounded="full" />
        </HStack>
      </ModalHeader>
      <ModalBody>
        <VStack align="start" gap="8">
          <Box>
            <HStack gap="4" align="start">
              <IconButton rounded="full">
                <LuMapPin />
              </IconButton>
              <VStack align="start">
                <Text>Dirección</Text>
                <Text>8 e 160 y 161 Berisso, AR</Text>
              </VStack>
            </HStack>
          </Box>

          <Box>
            <HStack gap="4" align="start">
              <IconButton rounded="full">
                <LuInfo />
              </IconButton>
              <VStack align="start">
                <Text>Contacto</Text>
                <HStack>
                  <Button h="12" colorScheme="blackAlpha">
                    <FaWhatsapp onClick={onOpen} />
                  </Button>
                  <Button h="12" colorScheme="blackAlpha">
                    <FaInstagram />
                  </Button>
                  <Button h="12" colorScheme="blackAlpha">
                    <FaGoogle />
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          </Box>

          <Box w="full">
            <HStack gap="4" align="start">
              <IconButton rounded="full">
                <LuMapPin />
              </IconButton>
              <VStack align="start" w="full">
                <Text>Horarios</Text>
                <HStack justify="space-between" w="full">
                  <Text>Lunes</Text>
                  <Text>Cerrado todo el día</Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text>Martes</Text>
                  <Text>19:30 - 23:00</Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text>Miercoles</Text>
                  <Text>19:30 - 23:00</Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text>Jueves</Text>
                  <Text>19:30 - 23:00</Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text>Viernes</Text>
                  <Text>19:30 - 23:00</Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text>Sabado</Text>
                  <Text>19:30 - 23:00</Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text>Domingo</Text>
                  <Text>19:30 - 23:00</Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </ModalBody>
      <ModalFooter mt="8" roundedBottom="2xl" bg="#27262e">
        <Button colorScheme="orange" mr={3} onClick={onClose}>
          Cerrar
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ModalInfo;
