import { Link } from "react-router-dom";
import { toSlug } from "../../utils/helpers";

function WallpaperItem({ wallpaper }) {
  const { wallpaperName, preview } = wallpaper;

  const slug = toSlug(wallpaperName);
  const cardLink = `/wallpapers/${slug}`;

  return (
    <div className="wallpaper-i">
      <Link to={cardLink} className="wallpaper-preview__cnt">
        <figure className="wallpaper-i__cnt">
          <img
            src={preview}
            alt={wallpaperName}
            className="wallpaper-i__img"
            title={wallpaperName}
          />
        </figure>

        <h1 className="wallpaper-i__title">{wallpaperName}</h1>
      </Link>
    </div>
  );
}

export default WallpaperItem;
