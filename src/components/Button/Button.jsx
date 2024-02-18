import { classNameJoin } from 'utils';
import scss from './Button.module.scss';

const Button = ({ onClick, className = '', children, isActive, style, mode }) => {
  // const isActive2 = 1;
  return (
    <button
      className={classNameJoin(scss.button, className) + (isActive ? scss.active : '')}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
