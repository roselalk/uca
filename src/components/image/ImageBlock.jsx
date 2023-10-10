import "./imageblock.css";
import "../block/block.css";
import "../hero/hero.css";
import "../../index.css";

function ImageBlock({ url }) {
  return (
    <>
      <section className="block--container image--container" style={{backgroundImage: `url(${url})`}}>
      </section>
    </>
  );
}

export default ImageBlock;
