import { Helmet } from "react-helmet-async";
import CardList from "../components/card/CardList";
import Lu from "../img/Lu.jpg";
import Cat from "../img/cat.jpg";
import Snail from "../img/snail.jpg";

function Home() {
  const description = "Homepage of site with a short story and latest cards";
  return (
    <>
      <Helmet>
        <title>Welcome to Paraplu.art</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="art, illustration" />
      </Helmet>

      <section className="home-welcome">
        <div className="home-grid">
          <div className="home-grid__cell1">
            Hello! Welcom to Paraplu.art. You could met
          </div>
          <div className="home-grid__cell2">
            <img src={Lu} alt="Lu" width="250" />
          </div>
          <div className="home-grid__cell3">or</div>
          <div className="home-grid__cell4">
            <img src={Cat} alt="cats" width="210" />
          </div>

          <div className="home-grid__cell5">
            And many other characters
            <figure className="">
              <img src={Snail} alt="snail" width="210" />
            </figure>
          </div>
        </div>
      </section>

      <section>
        <h2>Latest cards</h2>
        <div>
          <CardList limit={3} />
        </div>
      </section>
    </>
  );
}

export default Home;
