import Popup from "../popup/Popup";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

function SocialNetworks({ shareUrl, title }) {
  return (
    <div>
      <Popup typeIcon="share" id="popup-share">
        <EmailShareButton url={shareUrl} subject={title} size={32} round="true">
          <EmailIcon size={32} round="true" />
        </EmailShareButton>

        <FacebookShareButton url={shareUrl} size={32} round="true">
          <FacebookIcon size={32} round="true" />
        </FacebookShareButton>
      </Popup>
    </div>
  );
}

export default SocialNetworks;
