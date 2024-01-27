import { useEffect, useState } from 'react';

export const useVideoDevices = () => {
  const [videoDevicesList, setVideoDevicesList] = useState([]);

  useEffect(() => {
    const getVideoDevices = async () => {
      const res = await navigator.mediaDevices.enumerateDevices();
      setVideoDevicesList(res.filter(({ kind }) => kind === 'videoinput'));
    };

    getVideoDevices();
  }, []);

  return videoDevicesList;
};
