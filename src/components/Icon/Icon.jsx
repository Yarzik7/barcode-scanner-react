import scss from "./Icon.module.scss";

const Icon = ({ iconName, size = 18 }) => {
  return (
    <svg width="100%" height="100%" className={scss.icon}>
      <use xlinkHref={`/images/icons.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icon;
