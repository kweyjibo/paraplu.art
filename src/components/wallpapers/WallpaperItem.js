import Actions from "./Actions";

function WallpaperItem({ wallpaper }) {
  const { wallpaperName, image, preview, id } = wallpaper;

  return (
    <div className="wallpaper-i">
      <div className="wallpaper-preview__cnt">
        <figure className="wallpaper-i__cnt">
          <img
            src={preview}
            alt={wallpaperName}
            className="wallpaper-i__img"
            title={wallpaperName}
          />
        </figure>
        <Actions id={id} wallpaperName={wallpaperName} image={image} />
      </div>

      <div id={`myPopover${id}`} popover="auto" className="popover">
        <img height="100%" src={image} alt={wallpaperName} />
      </div>

      <h1 className="wallpaper-i__title">{wallpaperName}</h1>
    </div>
  );
}

export default WallpaperItem;
