import { ReactComponent as DownloadIcon } from "./../../img/icons/download-16.svg";

function Download({ file, fileName, children }) {
  return (
    <a href={file} download={fileName} className="download-lk">
      <span className="download-icon">
        <DownloadIcon width="16" />
      </span>{" "}
      {children}
    </a>
  );
}

export default Download;
