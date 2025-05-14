import { Link } from "react-router-dom";
import { toSlug } from "../../utils/helpers";

function CardItem({ card }) {
  const { cardName, preview } = card;

  const slug = toSlug(cardName);
  const cardLink = `/cards/${slug}`;

  return (
    <div className="card-item">
      <Link to={cardLink} className="card-item__lk">
        <figure className="card-item__cnt">
          <span className="card-item__inner">
            <img src={preview} alt={cardName} className="card-item__img" />
          </span>
          <figcaption className="card-item__caption">{cardName}</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default CardItem;
