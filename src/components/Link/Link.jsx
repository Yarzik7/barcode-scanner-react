import scss from './Link.module.scss';
import { classNameJoin } from 'utils';

const Link = ({ link, className = '', children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={classNameJoin(scss.link, className)}
    >
      {children}
    </a>
  );
};

export default Link;
