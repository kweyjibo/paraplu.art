import { ReactComponent as WindmillBody } from "./../../img/windmill-body.svg";
import { ReactComponent as WindmillAnimation } from "./../../img/windmill-fl.svg";

function Windmill() {
  return (
    <div className="windmill">
      <div className="windmill-cnt">
        <WindmillBody alt="Windmill" width={97} />
        <div className="windmill-fl">
          <WindmillAnimation alt="Windmill" width={193} />
        </div>
      </div>
    </div>
  );
}

export default Windmill;
