import { classNameJoin } from 'utils';
import scss from './Button.module.scss';

const Button = ({ onClick, className = '', children, isActive, style }) => {
  return (
    <button
      className={classNameJoin(scss.button, className) + (isActive ? 'active' : '')}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
