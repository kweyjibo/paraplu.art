import Icon from "../icon/Icon";
import Button from "../Button";
import socialsIcons from "../../img/icons/socials.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useState } from "react";

function Popup({ id, typeIcon, children, addClass }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleClose() {
    setIsChecked(false);
  }

  const ref = useOutsideClick(handleClose);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="popup" ref={ref}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="popup-clickable-area">
        <label htmlFor={id} className="open-popup-btn"></label>
        <Button type="circle" additionalClass="center">
          <Icon res={`${socialsIcons}#${typeIcon}`} />
        </Button>
      </span>

      <div className={`popup-content ${addClass ? addClass : ""}`}>
        <label htmlFor={id} className="popup-close">
          &times;
        </label>
        {children}
      </div>
    </div>
  );
}

export default Popup;
