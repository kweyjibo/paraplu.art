import { Link } from "react-router-dom";

function CardItem({ card }) {
  const { cardName, preview, id } = card;

  return (
    <div className="card-item">
      <Link to={`cards/${id}`} className="card-item__lk">
        <figure className="card-item__cnt">
          <span className="card-item__img">
            <img src={preview} width="210" alt={cardName} />
          </span>
          <figcaption className="card-item__caption">{cardName}</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default CardItem;
