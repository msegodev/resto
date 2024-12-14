import { useForm } from "react-hook-form";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Button,
  Wrap,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { useEffect, useState } from "react";
import { crearProducto } from "../../services/productos/productoService";
import CustomForm from "../../components/form";
import { NavLink, useNavigate } from "react-router-dom";
import { listarCategorias } from "../../services/productos/categoriaService";
import CardPreview from "../../components/ui/CardPreview";

const ProductosAgregarPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [value, setValue] = useState("1");
  const [categorias, setCategorias] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const nombre = watch("nombre");
  const descripcion = watch("descripcion");
  const precio = watch("valor_precio");
  const watchImagen = watch("imagen");
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      console.log("Datos enviados:", data);

      // Crear el producto
      const productoCreado = await crearProducto(data);
      toast({
        title: "Éxito",
        description: "El producto ha sido creado.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      navigate("/menu/productos", { state: { productoCreado } });
    } catch (error) {
      console.error(
        "Error al crear el producto:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    if (watchImagen && watchImagen.length > 0) {
      const file = watchImagen[0];
      const objectUrl = URL.createObjectURL(file);
      setPreviewImage(objectUrl);

      // Limpieza: revocar la URL cuando el componente se desmonte o cambie la imagen
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewImage(null);
    }
  }, [watchImagen]);

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
          <CardPreview
            previewImage={previewImage}
            descripcion={descripcion}
            nombre={nombre}
            precio={precio}
          />
        </VStack>
      </Wrap>
    </Box>
  );
};

export default ProductosAgregarPage;
