import "./InfoBlock.css";
import "../block/block.css";

function InfoBlock() {
  return (
    <>
      <article className="block--container infoblock--container">
        <h2 className="infoblock--h2">Spirit.</h2>
        <h2 className="infoblock--h2">Ambition.</h2>
        <h2 className="infoblock--h2">Class.</h2>
        <h3 className="infoblock--h3">UCA - Amsterdam's First University Cheer Team</h3>
        <p className="infoblock--p">Started in 2022 but officially formed in 2023, UCA is Amsterdam's first official University
          cheer squad! UCA is a daughter organisation of the USC and is affiliated with the Vrije
          Universiteit (VU), Universiteit van Amsterdam (UVA) and Hogeschool van Amsterdam (HvA). UCA is a
          competitive cheer team competing in competitions all over Europe.
        </p>
      </article>
    </>
  );
}

export default InfoBlock;
