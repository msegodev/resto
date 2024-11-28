import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function CategoriasModal({ isOpen, onClose, onSubmit }) {
  // Inicializar el formulario con react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Función que maneja el envío del formulario
  const onFormSubmit = (data) => {
    onSubmit(data); // Pasa los datos del formulario a la función onSubmit recibida como prop
    onClose(); // Cierra el modal después de enviar el formulario
  };

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent>
          <ModalHeader>Agregar categoría</ModalHeader>
          <ModalCloseButton />
          {/* Aquí no es necesario pasar el form ID al botón */}
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <ModalBody>
              <FormControl isRequired isInvalid={errors.nombre}>
                <FormLabel>Nombre</FormLabel>
                <Input
                  placeholder="Ingrese nombre..."
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                  })}
                />
                {errors.nombre && (
                  <span style={{ color: "red" }}>{errors.nombre.message}</span>
                )}
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button variant="ghost" type="submit">
                Agregar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CategoriasModal;
