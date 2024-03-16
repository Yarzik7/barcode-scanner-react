import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import scss from './Header.module.scss';

const Header = () => {
  return (
    <header className={scss.header}>
      <Container className={scss.headerContainer}>
        <Heading type="h1" content="Barcode scanner" props={{ className: scss.heading }} />
      </Container>
    </header>
  );
};

export default Header;
