import CardList from "../components/card/CardList";
import Intro from "../components/intro/Intro";

function Home() {
  return (
    <>
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
