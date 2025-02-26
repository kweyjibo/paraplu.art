import { useEffect, useState } from "react";

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
      <h1 className="wallpaper-title">Wallpapers for mobile</h1>
      <div className="wallpapers-list">
        {wallpapers.map((wallpaper) => (
          <WallpaperItem key={wallpaper.id} wallpaper={wallpaper} />
        ))}
      </div>
    </>
  );
}

export default WallpaperList;
