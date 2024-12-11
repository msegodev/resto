import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const CustomForm = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  control,
  value,
  setValue,
  categorias,
}) => {
  return (
    <form
      style={{
        width: "100%",
        gap: 30,
        display: "flex",
        direction: "column",
        flexWrap: "wrap",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl
        id="producto-form"
        isRequired
        isInvalid={!!errors.nombre}
      >
        <FormLabel color="#4A5568">Nombre</FormLabel>
        <Input
          type="text"
          bg={"white"}
          {...register("nombre", {
            required: "El nombre del producto es requerido.",
          })}
        />
        <FormErrorMessage>{errors.nombre?.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel color="#4A5568">Descripción</FormLabel>
        <Textarea bg={"white"} {...register("descripcion")} />
      </FormControl>

      <FormControl w="3xs" isInvalid={!!errors.sku}>
        <FormLabel color="#4A5568">SKU</FormLabel>
        <Input type="text" bg={"white"} {...register("sku")} />
        <FormErrorMessage>{errors.sku?.message}</FormErrorMessage>
      </FormControl>

      <FormControl w="xs" isRequired>
        <FormLabel color="#4A5568">Categoria</FormLabel>
        <Select
          placeholder="Seleccione una categoria"
          bg={"white"}
          {...register("categoria_id")}
        >
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel color="#4A5568">Disponible en</FormLabel>
        <Controller
          name="disponible_en"
          control={control}
          defaultValue={[]}
          render={({ field }) => {
            return (
              <CheckboxGroup {...field} ref={null}>
                <Stack spacing={[1, 5]} direction={["column"]}>
                  <Checkbox value="delivery">Delivery</Checkbox>
                  <Checkbox value="salon">Salon</Checkbox>
                  <Checkbox value="takeaway">Takeaway</Checkbox>
                </Stack>
              </CheckboxGroup>
            );
          }}
        />
      </FormControl>

      <FormControl w={"3xs"}>
        <FormLabel color="#4A5568">Precio</FormLabel>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1">Único</Radio>
            <Radio value="2">Múltiple</Radio>
          </Stack>
        </RadioGroup>
        <Input bg={"white"} {...register("valor_precio")} />
      </FormControl>

      <FormControl hidden>
        <FormLabel>Imagen</FormLabel>
        <Input type="file" bg={"white"} {...register("imagen")} />
      </FormControl>

      <FormControl hidden>
        <FormLabel color="#4A5568">Visibilidad</FormLabel>
        {/* Aquí puedes agregar más controles si es necesario */}
      </FormControl>

      {/* <Button type="submit" mt={4}>
        Guardar
      </Button> */}
    </form>
  );
};

export default CustomForm;
