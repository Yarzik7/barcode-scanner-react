import React from "react";
import { classNameJoin } from "utils";
import scss from "./Heading.module.scss";

const Heading = ({ type = "h2", props = {}, content = "Heading" }) => {
  return React.createElement(
    type,
    { ...props, className: classNameJoin(scss.heading, props.className ?? "") },
    content
  );
};

export default Heading;
