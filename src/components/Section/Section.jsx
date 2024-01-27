import Container from "../Container/Container";
import { classNameJoin } from "utils";
import scss from "./Section.module.scss";

const Section = ({
  withoutContainer = false,
  className = "",
  containerClassName,
  children,
}) => {
  return (
    <section className={classNameJoin(scss.section, className)}>
      {!withoutContainer ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
