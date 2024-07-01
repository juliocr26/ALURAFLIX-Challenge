import { Content } from "../../../StyledComponent/Home/Header/Header-Component/Content-Buttons";
import {
  BannerStilizado,
  Gradient,
} from "../../../StyledComponent/Main/Banner";
import Button from "./Button";
import Container from "./Container";
import Player from "./Player";

function Banner({ img, color }) {
  return (
    <BannerStilizado style={{ backgroundImage: `url("/public/img/${img}")` }}>
      <Gradient style={{ background: `${color}` }} />
      <Content>
        <Container>
          <Button
            titulo="Front End"
            fontSize="48px"
            color="#6bd1ff"
            ancho="296.82px"
            alto="92px"
            radius="15px"
          />
          <h1>Challenge React</h1>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </Container>
        <Player img="player.png" />
      </Content>
    </BannerStilizado>
  );
}

export default Banner;
