import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Banner from "../../Components/Main/Banner";
import Button from "../../Components/Main/Banner/Button";
import Player from "../../Components/Main/Banner/Player";
import Videos from "../../Components/Main/Videos";
import Card from "../../Components/Main/Videos/Card";
import ContentVideos from "../../Components/Main/Videos/Contenedor";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner img="Banner.png" color="#0012338f" />
        <Videos>
          <Button />
          <ContentVideos>
            <Card />
          </ContentVideos>
        </Videos>
      </Main>
    </>
  );
}

export default Home;
