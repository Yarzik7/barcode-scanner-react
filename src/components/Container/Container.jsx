import { classNameJoin } from 'utils';
import scss from './Container.module.scss';

const Container = ({ className = '', children }) => {
  return <div className={classNameJoin(scss.container, className)}>{children}</div>;
};

export default Container;
