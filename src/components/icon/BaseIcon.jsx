const BaseIcon = ({
  id,
  size = 46,
  className = "",
  fillColor = "#fff",
  disableGradient = false,
  ...props
}) => {
  const gradientId = `svgGradient-${id}`;
  const fill = disableGradient ? fillColor : `url(#${gradientId})`;
  return (
    <svg
      className={className}
      style={{ width: size, height: size, display: "block" }}
      {...props}
    >
      {!disableGradient && (
        <defs>
          <linearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="46%" stopColor="rgba(113, 65, 109, 1)" />
            <stop offset="100%" stopColor="rgba(164, 95, 158, 1)" />
          </linearGradient>
        </defs>
      )}
      <use xlinkHref={`assets/icons/sprite.svg#${id}`} fill={fill} />
    </svg>
  );
};

export default BaseIcon;
