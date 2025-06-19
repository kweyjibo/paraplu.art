import { useEffect } from "react";
import { useWallpapers } from "../../contexts/WallpapersContex";

import Actions from "./Actions";
import Error from "../error/Error";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";

function CardWallpaper() {
  const { slug } = useParams();
  const { getWallpaperBySlug, currentItem, isLoading, error } = useWallpapers();

  useEffect(() => {
    getWallpaperBySlug(slug); // Fetch the card by its slug
  }, [slug, getWallpaperBySlug]);

  const { id, image, wallpaperName } = currentItem;

  if (isLoading) return <Spinner />;

  if (Object.keys(currentItem).length === 0) return <Error message={error} />;

  return (
    <div className="cardWallpaper-cnt">
      <figure className="cardWallpaper">
        <img src={image} alt={wallpaperName} className="cardWallpaper-img" />
      </figure>
      <div className="cardWallpaper-inf">
        <h1 className="cardWallpaper__title">{wallpaperName}</h1>
        <Actions id={id} wallpaperName={wallpaperName} image={image} />
      </div>
    </div>
  );
}

export default CardWallpaper;
