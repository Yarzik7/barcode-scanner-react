import Button from "../Button/Button";
import { classNameJoin } from "utils";
import scss from "./ControlPanel.module.scss";

const ControlPanel = ({ setIsScannStart, className }) => {
  const onScannStart = () => setIsScannStart();

  return (
    <div className={classNameJoin(scss.controlPanel, className)}>
      <Button onClick={onScannStart}>S</Button>
    </div>
  );
};

export default ControlPanel;
