import "./home.css";
import Hero from "../hero/Hero";
import QuoteBlock from "../quote/QuoteBlock";
import NewsBlock from "../news/NewsBlock";
import InfoBlock from "../info/InfoBlock";
import ImageBlock from "../image/ImageBlock";
import pyramid from "../../assets/pyramid.webp";
import cheer from "../../assets/cheer.jpeg";
import flying from "../../assets/flying.jpg";
import squad2 from "../../assets/squad2.jpg";
import ButtonLinks from "../button-links/ButtonLinks";
import InstagramBlock from "../instagram/InstagramBlock";

function Home() {
  return (
    <>
      <Hero />
      <QuoteBlock />
      <InfoBlock />
      <ImageBlock url={pyramid} />
      <NewsBlock />
      <ImageBlock url={cheer}/>
      <ImageBlock url={flying}/>
      <ImageBlock url={squad2}/>
      <ButtonLinks />
      <InstagramBlock />
    </>
  );
}

export default Home;
