import PlayerStylizado from "../../../../StyledComponent/Main/Banner/Player-styles/Player.styles";

function Player({ img }) {
  return <PlayerStylizado src={`/public/Img/${img}`} alt="Player" />;
}

export default Player;
