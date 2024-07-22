import { ReactComponent as Logopicture } from "./../img/paraplu-logo.svg";

function Logo() {
  return (
    <>
      <div className="logo-rain"></div>
      <div className="logo">
        <Logopicture alt="Logo" width={250} />
      </div>
    </>
  );
}

export default Logo;
