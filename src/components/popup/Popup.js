import Icon from "../icon/Icon";
import Button from "../Button";
import socialsIcons from "../../img/icons/socials.svg";

function Popup({ id, typeIcon, children }) {
  return (
    <div className="popup">
      <input type="checkbox" id={id} />
      <span className="popup-clickable-area">
        <label htmlFor={id} className="open-popup-btn"></label>
        <Button type="circle">
          <Icon res={`${socialsIcons}#${typeIcon}`} width={32} height={32} />
        </Button>
      </span>

      <div className="popup-content">
        <label htmlFor={id} className="popup-close">
          &times;
        </label>
        {children}
      </div>
    </div>
  );
}

export default Popup;
