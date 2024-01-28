import Select from '../Select/Select';
import { useVideoDevices } from 'hooks';
import scss from './SideBar.module.scss';

const SideBar = ({ deviceName, onSetScannDevice }) => {
  const { videoDevicesList } = useVideoDevices();

  return (
    <aside className={scss.sidebar}>
      <div className={scss.sidebarContentBox}>
        <Select
          onSetScannDevice={onSetScannDevice}
          deviceName={deviceName}
          videoDevicesList={videoDevicesList}
        />
      </div>
    </aside>
  );
};

export default SideBar;
