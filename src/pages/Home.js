import { Helmet } from "react-helmet-async";
import CardList from "../components/card/CardList";
import Intro from "../components/intro/Intro";

function Home() {
  const description =
    "Paraplu.art - dreams about something good. Digital illustration and simple art about life, nature, and people.";
  const title = "Welcome to Paraplu.art";
  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <title>Welcome to Paraplu.art</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="art,illustration,digital art,digital illustration,vector graphics"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Intro />

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
