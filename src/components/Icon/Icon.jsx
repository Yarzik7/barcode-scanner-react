import { classNameJoin } from 'utils';
import scss from './Icon.module.scss';

const Icon = ({ iconName, size = 24, className = '' }) => {
  return (
    <svg width={size} height={size} className={classNameJoin(scss.icon, className)}>
      <use xlinkHref={`/images/icons.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icon;
