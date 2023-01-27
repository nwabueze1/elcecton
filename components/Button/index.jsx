import Styles from "./Styles.module.scss";

export default function Button({
  type,
  onClick,
  disabled,
  bgColor,
  border,
  color,
  children,
}) {
  return (
    <button
      className={Styles.search__button}
      style={{ backgroundColor: bgColor, color, border }}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
