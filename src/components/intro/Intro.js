import Lu from "../../img/Lu.jpg";
import Cat from "../../img/cat.jpg";
import Snail from "../../img/snail.jpg";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-grid">
        <div className="intro-grid__cell1">
          <div className="intro-text">
            <p className="intro-big-text">Hi!</p>
            <p>
              Welcome to <span className="intro-big-text">Paraplu.art</span>.
            </p>
            <p>You will meet</p>
          </div>
        </div>
        <div className="intro-grid__cell2">
          <figure className="intro-figure">
            <img src={Lu} alt="Lu" className="intro-img__250" />
          </figure>
        </div>
        <div className="intro-grid__cell3">or</div>
        <div className="intro-grid__cell4">
          <figure className="intro-figure">
            <img src={Cat} alt="cats" className="intro-img__210" />
          </figure>
        </div>

        <div className="intro-grid__cell5">
          And many other characters
          <figure className="intro-figure __top">
            <img src={Snail} alt="snail" className="intro-img__210" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Intro;
