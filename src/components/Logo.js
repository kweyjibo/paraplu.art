import { Link } from "react-router-dom";

import { ReactComponent as Logopicture } from "./../img/paraplu-logo.svg";
import { ReactComponent as Logopicturemobile } from "./../img/m/paraplu-logo-v2.svg";

function Logo() {
  return (
    <>
      <div className="logo __desktop">
        <Link to="/">
          <Logopicture alt="Logo" width={224} />
        </Link>
      </div>
      <div className="logo __mobile">
        <Link to="/" className="logo-lk">
          <Logopicturemobile alt="Logo" width={84} />
        </Link>
      </div>
    </>
  );
}

export default Logo;
