import scss from './Icon.module.scss';

const Icon = ({ iconName, size = 24 }) => {
  return (
    <svg width={size} height={size} className={scss.icon}>
      <use xlinkHref={`/images/icons.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icon;
