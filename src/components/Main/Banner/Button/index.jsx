import ButtonStylizado from "../../../../StyledComponent/Main/Banner/Button";

export default function Button({
  titulo,
  color,
  size,
  fontSize,
  ancho,
  alto,
  radius,
}) {
  return (
    <ButtonStylizado
      color={color}
      size={size}
      fontSize={fontSize}
      ancho={ancho}
      alto={alto}
      radius={radius}
    >
      {titulo}
    </ButtonStylizado>
  );
}
