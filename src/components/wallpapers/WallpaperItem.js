import Download from "../download/Download";
import Button from "../Button";

import Zoom from "../../img/icons/zoom-32.svg";
import Icon from "../icon/Icon";

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

        <div className="wallpaper-actions">
          <ul className="wallpaper-actions__list">
            <li className="wallpaper-actions__item">
              <Button
                type="circle"
                additionalClass="center"
                popovertarget={`myPopover${id}`}
              >
                <Icon
                  res={`${Zoom}#zoom-32`}
                  additionalClass="wallpaper-zoom"
                />
              </Button>
            </li>
            <li className="wallpaper-actions__item">
              <Button type="circle" additionalClass="center">
                <Download file={image} fileName={wallpaperName} />
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <div id={`myPopover${id}`} popover="auto" className="popover">
        <img height="100%" src={image} alt={wallpaperName} />
      </div>

      <h2 className="wallpaper-i__title">{wallpaperName}</h2>
    </div>
  );
}

export default WallpaperItem;
