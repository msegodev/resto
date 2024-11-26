import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";

function CategoriasModal({ isOpen, onClose }) {
  const btnRef = useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Agregar categoría</DrawerHeader>

          <DrawerBody>
            <FormLabel >Nombre</FormLabel>
            <Input placeholder="Ingrese nombre..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">Agregar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CategoriasModal;
