import Select from "../Select/Select";
import scss from "./AppTest.module.scss";

const AppTest = ({ deviceId, deviceName,onSetScannDevice }) => {
  return (
    <div className={scss.appTest}>
          <Select deviceName={deviceName} deviceId={deviceId} onSetScannDevice={onSetScannDevice} />
    </div>
  );
};

export default AppTest;
