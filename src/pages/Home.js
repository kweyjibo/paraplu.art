import List from "../components/card/CardList";

function Home({ cards, isLoading }) {
  return (
    <div>
      <List cards={cards} isLoading={isLoading} />
    </div>
  );
}

export default Home;
