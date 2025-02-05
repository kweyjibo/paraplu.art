import socialsIcons from "../../img/icons/socials.svg";
import Icon from "../icon/Icon";

function Download({ file, fileName, children }) {
  return (
    <a href={file} download={fileName} className="download-lk">
      <span className="download-icon">
        <Icon res={`${socialsIcons}#download`} />
      </span>
      {children}
    </a>
  );
}

export default Download;
