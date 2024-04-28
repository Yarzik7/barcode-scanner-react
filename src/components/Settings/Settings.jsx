import Select from '../Select/Select';
import scss from './Settings.module.scss';

const Settings = ({ deviceName, onSetScannDevice, videoDevicesList }) => {
  return (
    <div className={scss.settingsContainer}>
      <div className={scss.settingsContentBox}>
        <Select
          onSetScannDevice={onSetScannDevice}
          deviceName={deviceName}
          optionsList={videoDevicesList}
          label="Camera"
        />
      </div>
    </div>
  );
};

export default Settings;
