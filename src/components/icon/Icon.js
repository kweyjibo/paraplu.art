function Icon({ res, additionalClass }) {
  const classes = additionalClass ? `icon ${additionalClass}` : "icon";

  return (
    <svg className={classes}>
      <use href={res} />
    </svg>
  );
}

export default Icon;
