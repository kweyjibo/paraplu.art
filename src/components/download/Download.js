import socialsIcons from "../../img/icons/socials.svg";
import Button from "../Button";
import Icon from "../icon/Icon";

function Download({ imageUrl, children }) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const getFileNameFromUrl = (url) => {
    try {
      const urlObject = new URL(url, window.location.origin); // Use window.location.origin for relative URLs
      const pathSegments = urlObject.pathname.split("/");
      return pathSegments[pathSegments.length - 1];
    } catch (error) {
      console.error("Invalid URL:", url);
      return "download"; // Fallback file name
    }
  };

  const finalFileName = getFileNameFromUrl(imageUrl);

  const shareImage = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], finalFileName, { type: blob.type });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Save to your device",
          text: "Your image is ready to download",
        });
      } else {
        return;
      }
    } catch (error) {
      console.error("Error Share API:", error);
    }
  };

  return (
    <>
      {isMobile ? (
        <>
          {children ? (
            <>
              <button onClick={shareImage} className="download-lk">
                <span className="download-icon">
                  <Icon res={`${socialsIcons}#download`} />
                </span>
                {children}
              </button>
            </>
          ) : (
            <Button
              type="circle"
              additionalClass="center"
              onClick={shareImage}
              className="download-lk"
            >
              <span className="download-icon">
                <Icon res={`${socialsIcons}#download`} />
              </span>
            </Button>
          )}
        </>
      ) : (
        <>
          {children ? (
            <a href={imageUrl} download={finalFileName} className="download-lk">
              <Icon res={`${socialsIcons}#download`} />
              {children}
            </a>
          ) : (
            <a href={imageUrl} download={finalFileName} className="download-lk">
              <Button type="circle" additionalClass="center">
                <Icon res={`${socialsIcons}#download`} />
              </Button>
            </a>
          )}
        </>
      )}
    </>
  );
}

export default Download;
