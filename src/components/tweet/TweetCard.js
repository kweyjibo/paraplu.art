function TweetCard({ tweet }) {
  const { title, date, image, text } = tweet;
  return (
    <article className="tweet">
      <h1 className="tweet-title">{title}</h1>
      <time dateTime={date}>{date}</time>
      <div className="tweet-text">{text}</div>
      <figure className="tweet-image">
        <img src={image} alt={title} className="tweet-image__src" />
      </figure>
    </article>
  );
}

export default TweetCard;
