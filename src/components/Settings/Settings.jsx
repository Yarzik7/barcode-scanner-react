import Select from '../Select/Select';
import { useVideoDevices } from 'hooks';
import scss from './Settings.module.scss';

const Settings = ({ deviceName, onSetScannDevice }) => {
  const { videoDevicesList } = useVideoDevices();
  return (
    <div className={scss.settingsContainer}>
      <div className={scss.settingsContentBox}>
        <Select
          onSetScannDevice={onSetScannDevice}
          deviceName={deviceName}
          videoDevicesList={videoDevicesList}
        />
      </div>
    </div>
  );
};

export default Settings;
