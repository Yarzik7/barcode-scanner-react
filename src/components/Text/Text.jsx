import { classNameJoin } from "@/utils";
import scss from "./Text.module.scss";

const Text = ({ text, className }) => {
  return <p className={classNameJoin(scss.text, className)}>{text}</p>;
};

export default Text;
