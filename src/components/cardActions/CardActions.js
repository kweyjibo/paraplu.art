import Download from "../download/Download";
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
        <Popup
          typeIcon="download"
          id="popup-download"
          addClass="popup--download"
        >
          <ul className="download-list">
            <li className="download-list__i">
              <Download file={image} fileName={title}>
                <span className="download-text">
                  <span className="download-text__bold">1240x1748</span> (A6,
                  300dpi)
                </span>
              </Download>
            </li>
            <li className="download-list__i">
              <Download file={image} fileName={title}>
                <span className="download-text">
                  <span className="download-text__bold">1748x2480</span> (A5,
                  300dpi)
                </span>
              </Download>
            </li>
          </ul>
        </Popup>
      </div>
    </div>
  );
}

export default CardActions;
