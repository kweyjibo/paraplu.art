import classNames from "classnames";

function Button({ children, onClick, type, size, additionalClass }) {
  const buttonClass = classNames("btn", {
    [type]: type,
    [size]: size,
    [additionalClass]: additionalClass,
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
