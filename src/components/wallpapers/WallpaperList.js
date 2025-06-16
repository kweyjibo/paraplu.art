import WallpaperItem from "./WallpaperItem";
import Spinner from "../Spinner";
import { useWallpapers } from "../../contexts/WallpapersContex";

function WallpaperList() {
  const { items, isLoading, error } = useWallpapers();

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
        {items.map((wallpaper) => (
          <WallpaperItem key={wallpaper.id} wallpaper={wallpaper} />
        ))}
      </div>
    </>
  );
}

export default WallpaperList;
