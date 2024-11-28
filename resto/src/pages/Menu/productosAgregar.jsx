import { useForm } from "react-hook-form";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Button,
  Tag,
  Wrap,
  Card,
  CardHeader,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { useState } from "react";
import { crearProducto } from "../../services/productos/productoService";
import CustomForm from "../../components/form";

const ProductosAgregarPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const [value, setValue] = useState("1");
  const nombre = watch("nombre");
  const descripcion = watch("descripcion");
  const precio = watch("precio");
  console.log(nombre, descripcion);

  const onSubmit = async (data) => {
    try {
      // Preparamos los datos y los enviamos al servicio
      const formData = new FormData();
      formData.append("nombre", data.nombre);
      formData.append("descripcion", data.descripcion);
      formData.append("sku", data.sku);
      formData.append("categoria", data.categoria);
      formData.append("disponibilidad", data.disponibilidad);
      formData.append("precio", data.precio);
      formData.append("imagen", data.imagen[0]);

      // Llamamos al servicio para crear el producto
      const productoCreado = await crearProducto(formData);

      console.log("Producto creado:", productoCreado);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };
  return (
    <Box px={"12"}>
      <HStack mb={"10"} justify={"space-between"} alignItems={"center"}>
        <HStack gap={10}>
          <LuArrowLeft size={26} />
          <Heading fontWeight={"black"}>Agregar producto</Heading>
        </HStack>

        <HStack>
          <Button>Cancelar</Button>
          <Button type="submit" form="producto-form">
            Guardar
          </Button>
        </HStack>
      </HStack>

      <Wrap>
        <VStack rounded={6} p={8} w={"xl"}>
          <CustomForm
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            control={control}
            value={value}
            setValue={setValue}
          />
        </VStack>

        <VStack>
          <Tag colorScheme="red">VISTA PREVIA EN LISTADO</Tag>
          <Card w={"lg"}>
            <HStack>
              <CardHeader>
                <Box>IMG</Box>
              </CardHeader>

              <CardBody>
                <HStack justify={"space-between"}>
                  <Text>{nombre}</Text>
                  <Text>{precio && `$${parseFloat(precio).toFixed(2)}`}</Text>
                </HStack>
                <Text>{descripcion}</Text>
              </CardBody>
            </HStack>
          </Card>
        </VStack>
      </Wrap>
    </Box>
  );
};

export default ProductosAgregarPage;
