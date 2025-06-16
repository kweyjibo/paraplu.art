import Download from "../download/Download";

function Actions({ wallpaperName, image }) {
  return (
    <div className="wallpaper-actions">
      <ul className="wallpaper-actions__list">
        <li className="wallpaper-actions__item">
          <Download imageUrl={image} fileName={wallpaperName} />
        </li>
      </ul>
    </div>
  );
}

export default Actions;
