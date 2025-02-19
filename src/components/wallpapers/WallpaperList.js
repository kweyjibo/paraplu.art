import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { getWallpapers } from "../../services/apiWallpapers";
import WallpaperItem from "./WallpaperItem";
import Spinner from "../Spinner";

function WallpaperList() {
  const [wallpapers, setWallpapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const data = await getWallpapers();
        setWallpapers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWallpapers();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Paraplu.art - Wallpapers</title>
        <meta name="description" content="Wallpapers" />
        <meta
          name="keywords"
          content="wallpapers,wallpaper,wallpaper for screen,background,backgrounds,illustration,digital art,digital illustration,"
        />
      </Helmet>
      <div className="wallpapers-list">
        {wallpapers.map((wallpaper) => (
          <WallpaperItem key={wallpaper.id} wallpaper={wallpaper} />
        ))}
      </div>
    </>
  );
}

export default WallpaperList;
