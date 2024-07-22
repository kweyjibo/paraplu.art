import List from "../components/card/List";

function Home({ cards, isLoading }) {
  return (
    <div>
      <List cards={cards} isLoading={isLoading} />
    </div>
  );
}

export default Home;
