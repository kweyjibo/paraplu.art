import Download from "../download/Download";
import Button from "../Button";

import Zoom from "../../img/icons/zoom-32.svg";
import Icon from "../icon/Icon";

function Actions({ id, wallpaperName, image }) {
  return (
    <div className="wallpaper-actions">
      <ul className="wallpaper-actions__list">
        <li className="wallpaper-actions__item">
          <Button
            type="circle"
            additionalClass="center"
            popovertarget={`myPopover${id}`}
          >
            <Icon res={`${Zoom}#zoom-32`} additionalClass="wallpaper-zoom" />
          </Button>
        </li>
        <li className="wallpaper-actions__item">
          <Download imageUrl={image} fileName={wallpaperName} />
        </li>
      </ul>
    </div>
  );
}

export default Actions;
