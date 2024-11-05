import classNames from "classnames";

function Button({ children, onClick, type, size }) {
  const buttonClass = classNames("btn", {
    [type]: type,
    [size]: size,
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
