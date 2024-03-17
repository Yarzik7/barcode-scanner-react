import scss from './Link.module.scss';
import { classNameJoin } from 'utils';

const Link = ({ link, className = '', children }) => {
  return (
    <a href={link} className={classNameJoin(scss.link, className)}>
      {children}
    </a>
  );
};

export default Link;
