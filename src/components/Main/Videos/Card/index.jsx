import { CardStylizada } from "../../../../StyledComponent/Main/Videos/Card";

export default function Card() {
  return (
    <CardStylizada>
      <div className="imagenContent">
        <img src="/public/img/alura.png" alt="Alura" className="img" />
      </div>
      <div className="rodapie">
        <div className="rodabpieItems">
          <img src="/public/img/borrar.png" alt="Borrar" />
          <span>Borrar</span>
        </div>
        <div className="rodabpieItems">
          <img src="/public/img/editar.png" alt="Editar" />
          <span>Editar</span>
        </div>
      </div>
    </CardStylizada>
  );
}
