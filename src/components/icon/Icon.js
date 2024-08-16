function Icon({ res, width, height }) {
  return (
    <svg className="social-ic" width={width} height={height}>
      <use href={res} />
    </svg>
  );
}

export default Icon;
