import CardList from "../components/card/CardList";

function Home() {
  return (
    <>
      <h2>Latest cards</h2>
      <div>
        <CardList limit={2} />
      </div>
    </>
  );
}

export default Home;
