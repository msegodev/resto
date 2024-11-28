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
}) => {
  return (
    <form id="producto-form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired isInvalid={!!errors.nombre}>
        <FormLabel>Nombre</FormLabel>
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
        <FormLabel>Descripción</FormLabel>
        <Textarea bg={"white"} {...register("descripcion")} />
      </FormControl>

      <FormControl isRequired isInvalid={!!errors.sku}>
        <FormLabel>SKU</FormLabel>
        <Input
          type="text"
          bg={"white"}
          {...register("sku", { required: "El SKU es requerido." })}
        />
        <FormErrorMessage>{errors.sku?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Categoria</FormLabel>
        <Select
          placeholder="Seleccione una categoria"
          bg={"white"}
          {...register("categoria")}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Disponible en</FormLabel>
        <Controller
          name="disponibilidad"
          control={control}
          defaultValue={[]}
          render={({ field }) => {
            return (
              <CheckboxGroup colorScheme="green" {...field} ref={null}>
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

      <FormControl>
        <FormLabel>Precio</FormLabel>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1">Único</Radio>
            <Radio value="2">Múltiple</Radio>
          </Stack>
        </RadioGroup>
        <Input bg={"white"} {...register("precio")} />
      </FormControl>

      <FormControl>
        <FormLabel>Imagen</FormLabel>
        <Input type="file" bg={"white"} {...register("imagen")} />
      </FormControl>

      <FormControl>
        <FormLabel>Visibilidad</FormLabel>
        {/* Aquí puedes agregar más controles si es necesario */}
      </FormControl>

      <Button type="submit" mt={4}>
        Guardar
      </Button>
    </form>
  );
};

export default CustomForm;
