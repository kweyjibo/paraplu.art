import { Link } from "react-router-dom";

import { ReactComponent as Logopicture } from "./../img/paraplu-logo.svg";
import { ReactComponent as Logopicturemobile } from "./../img/m/paraplu-logo.svg";

function Logo() {
  return (
    <>
      <div className="logo __desktop">
        <Link to="/">
          <Logopicture alt="Logo" width={224} />
        </Link>
      </div>
      <div className="logo __mobile">
        <Link to="/">
          <Logopicturemobile alt="Logo" width={84} />
        </Link>
      </div>
    </>
  );
}

export default Logo;
