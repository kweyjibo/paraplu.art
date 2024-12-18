import Button from "../Button";
import Popup from "../popup/Popup";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

function SocialNetworks({ shareUrl, title }) {
  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div>
      <Popup typeIcon="share" id="popup-share">
        <div className="social-networks__tx">
          Share this with your social Community
        </div>
        <ul className="social-list">
          <li className="social-list__i">
            <EmailShareButton
              url={shareUrl}
              subject={title}
              size={32}
              round="true"
            >
              <EmailIcon size={32} round="true" />
            </EmailShareButton>
          </li>

          <li className="social-list__i">
            <FacebookShareButton
              url={shareUrl}
              size={32}
              image={"https://next-share.vercel.app/next-share.png"}
              description={
                "next-share is a social share buttons for your next React apps."
              }
              quote={
                "next-share is a social share buttons for your next React apps."
              }
              title="fsdfsdf"
              hashtag={"#nextshare"}
              round="true"
            >
              <FacebookIcon size={32} round="true" />
            </FacebookShareButton>
          </li>
        </ul>

        <div className="social-networks__tx">or copy link</div>
        <input
          type="text"
          className="social-input"
          value={shareUrl}
          title={shareUrl}
          readOnly
          onClick={(e) => e.target.select()}
        />

        <Button onClick={handleCopyToClipboard} type="normal" size="small">
          Copy to Clipboard
        </Button>
      </Popup>
    </div>
  );
}

export default SocialNetworks;
