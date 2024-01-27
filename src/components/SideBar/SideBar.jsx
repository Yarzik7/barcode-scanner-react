import Select from '../Select/Select';
// import { useEffect, useState } from 'react';
import { useVideoDevices } from 'hooks';
import scss from './SideBar.module.scss';

const SideBar = ({ deviceName, onSetScannDevice }) => {
  // const [videoDevicesList, setVideoDevicesList] = useState([]);
  // console.log(videoDevicesList[0]);

  // useEffect(() => {
  //   const getVideoDevices = async () => {
  //     const res = await navigator.mediaDevices.enumerateDevices();
  //     setVideoDevicesList(res.filter(({ kind }) => kind === 'videoinput'));
  //   };

  //   getVideoDevices();
  // }, []);

  const videoDevicesList = useVideoDevices();

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
