import Download from "../download/Download";
import Button from "../Button";

import Zoom from "../../img/icons/zoom-32.svg";
import Icon from "../icon/Icon";

function Actions({ wallpaperName, image }) {
  return (
    <div className="wallpaper-actions">
      <ul className="wallpaper-actions__list">
        <li className="wallpaper-actions__item">
          <a href={image} target="_blank" rel="noopener noreferrer">
            <Button type="circle" additionalClass="center border">
              <Icon res={`${Zoom}#zoom-32`} additionalClass="wallpaper-zoom" />
            </Button>
          </a>
        </li>
        <li className="wallpaper-actions__item">
          <Download imageUrl={image} fileName={wallpaperName} />
        </li>
      </ul>
    </div>
  );
}

export default Actions;
