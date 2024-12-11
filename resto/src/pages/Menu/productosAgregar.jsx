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
  Image,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { useEffect, useState } from "react";
import { crearProducto } from "../../services/productos/productoService";
import CustomForm from "../../components/form";
import { NavLink } from "react-router-dom";
import { formatNumberToARS } from "../../helpers";
import { listarCategorias } from "../../services/productos/categoriaService";
import preview from "../../assets/preview.png";

const ProductosAgregarPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const [value, setValue] = useState("1");
  const [categorias, setCategorias] = useState([]);
  const nombre = watch("nombre");
  const descripcion = watch("descripcion");
  const precio = watch("valor_precio");
  const toast = useToast();
  const onSubmit = async (data) => {
    try {
      console.log("Datos enviados:", data);

      // Crear el producto
      const productoCreado = await crearProducto(data);
      toast({
        title: "Éxito",
        description: "La categoría ha sido creada.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      console.log("Producto creado:", productoCreado);
    } catch (error) {
      console.error(
        "Error al crear el producto:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    const getCategorias = async () => {
      let data = await listarCategorias();
      setCategorias(data);
    };
    getCategorias();
  }, []);
  return (
    <Box px={"12"}>
      <HStack mb={"10"} justify={"space-between"} alignItems={"center"}>
        <HStack gap={10}>
          <NavLink to={"/menu/productos/"}>
            <IconButton colorScheme="purple" variant={"outline"}>
              <LuArrowLeft size={26} />
            </IconButton>
          </NavLink>
          <Heading fontWeight={"black"}>Agregar producto</Heading>
        </HStack>

        <HStack>
          <NavLink to={"/menu/productos/"}>
            <Button colorScheme="purple" variant={"outline"}>
              Cancelar
            </Button>
          </NavLink>
          <Button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            form="producto-form"
            colorScheme="purple"
          >
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
            categorias={categorias}
          />
        </VStack>

        <VStack align={"start"}>
          <Tag colorScheme="red">VISTA PREVIA EN LISTADO</Tag>
          <Card w={"lg"}>
            <HStack align={"start"}>
              <CardHeader py={3} pl={3} pr={0}>
                <Image rounded="xl" w="full" objectFit="cover" src={preview} />
              </CardHeader>

              <CardBody pl={0}>
                <HStack justify={"space-between"}>
                  <Text>{nombre}</Text>
                  <Text fontWeight={600}>
                    {console.log(precio)}
                    {precio && `$ ${formatNumberToARS(precio)}`}
                  </Text>
                </HStack>
                <Text fontSize="xs" color="gray.600">
                  {descripcion}
                </Text>
              </CardBody>
            </HStack>
          </Card>
        </VStack>
      </Wrap>
    </Box>
  );
};

export default ProductosAgregarPage;
