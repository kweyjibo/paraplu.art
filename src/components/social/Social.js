import Icon from "../icon/Icon";
import socialsIcons from "../../img/icons/socials.svg";

function Social() {
  return (
    <div>
      <div>
        <Icon res={`${socialsIcons}#share`} width={32} height={32} />
      </div>
      <div>
        <Icon res={`${socialsIcons}#download`} width={32} height={32} />
      </div>
    </div>
  );
}

export default Social;
