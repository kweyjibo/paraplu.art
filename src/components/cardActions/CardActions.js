import Popup from "../popup/Popup";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

function CardActions({ title, image }) {
  const shareUrl = window.location.href;

  return (
    <div className="actions-list">
      <div className="actions-list__i">
        <Popup typeIcon="share" id="popup-share">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            size={32}
            round="true"
          >
            <EmailIcon size={32} round="true" />
          </EmailShareButton>
          <FacebookShareButton url={shareUrl} size={32} round="true">
            <FacebookIcon size={32} round="true" />
          </FacebookShareButton>
        </Popup>
      </div>

      <div className="actions-list__i">
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
