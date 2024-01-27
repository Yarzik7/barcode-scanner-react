import Select from "../Select/Select";
import { useEffect, useState } from "react";
import scss from "./SideBar.module.scss";

const SideBar = ({ deviceName, onSetScannDevice }) => {
  const [videoDevicesList, setVideoDevicesList] = useState([]);

  useEffect(() => {
    const getVideoDevices = async () => {
      const res = await navigator.mediaDevices.enumerateDevices();
      setVideoDevicesList(res.filter(({ kind }) => kind === "videoinput"));
    };

    getVideoDevices();
  }, []);

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
