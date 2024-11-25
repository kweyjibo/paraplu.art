import Lu from "../../img/Lu.jpg";
import Cat from "../../img/cat.jpg";
import Snail from "../../img/snail.jpg";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-grid">
        <div className="intro-grid__cell1">
          Hello! Welcom to Paraplu.art. You could met
        </div>
        <div className="intro-grid__cell2">
          <img src={Lu} alt="Lu" className="intro-img__250" />
        </div>
        <div className="intro-grid__cell3">or</div>
        <div className="intro-grid__cell4">
          <img src={Cat} alt="cats" className="intro-img__210" />
        </div>

        <div className="intro-grid__cell5">
          And many other characters
          <figure className="">
            <img src={Snail} alt="snail" className="intro-img__210" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Intro;
