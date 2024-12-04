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
  const precio = watch("precio");

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
            <LuArrowLeft size={26} />
          </NavLink>
          <Heading fontWeight={"black"}>Agregar producto</Heading>
        </HStack>

        <HStack>
          <NavLink to={"/menu/productos/"}>
            <Button>Cancelar</Button>
          </NavLink>
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
            categorias={categorias}
          />
        </VStack>

        <VStack>
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
