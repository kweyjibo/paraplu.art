import { Helmet } from "react-helmet-async";
import CardList from "../components/card/CardList";

function Cards() {
  return (
    <>
      <Helmet>
        <title>Paraplu.art - Cards</title>
        <meta name="description" content="All cards" />
        <meta
          name="keywords"
          content="illustration,digital art,digital illustration,funny cards,funny illustrations"
        />
      </Helmet>
      <CardList />
    </>
  );
}

export default Cards;
