import scss from './Link.module.scss';

const Link = ({ link, children }) => {
  return (
    <a href={link} className={scss.link}>
      {children}
    </a>
  );
};

export default Link;
