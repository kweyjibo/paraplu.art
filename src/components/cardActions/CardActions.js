import Popup from "../popup/Popup";
import SocialNetworks from "../socialNetworks/SocialNetworks";

function CardActions({ title, image }) {
  const shareUrl = window.location.href;

  return (
    <div className="action-list">
      <div className="action-list__i">
        <SocialNetworks shareUrl={shareUrl} title={title} />
      </div>

      <div className="action-list__i">
        <Popup typeIcon="download" id="popup-download">
          <a href={image} download="image.jpg">
            download
          </a>
        </Popup>
      </div>
    </div>
  );
}

export default CardActions;
