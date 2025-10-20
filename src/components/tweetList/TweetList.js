import { useEffect, useState } from "react";
import { getTweets } from "../../services/apiTweets";
import TweetCard from "../tweet/TweetCard";

function TweetList() {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTweets() {
      try {
        const data = await getTweets();
        setTweets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTweets();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {tweets.map((tweet) => (
        <li key={tweet.id} className="tweet-list__item island">
          <TweetCard tweet={tweet} />
        </li>
      ))}
    </ul>
  );
}

export default TweetList;
