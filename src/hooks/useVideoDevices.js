import { useEffect, useState } from 'react';

export const useVideoDevices = () => {
  const [videoDevicesList, setVideoDevicesList] = useState([]);
  const [betterDeviceId, setBetterDeviceId] = useState('');

  useEffect(() => {
    const getVideoDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoinputDevices = devices.filter(({ kind }) => kind === 'videoinput');
      const betterVideoDeviceId = videoinputDevices
        .map(device => device.getCapabilities())
        .sort(
          ({ aspectRatio: { max: maxP } }, { aspectRatio: { max: maxN } }) => maxN - maxP
        )[0].deviceId;
      setVideoDevicesList(videoinputDevices);
      setBetterDeviceId(betterVideoDeviceId);
    };

    getVideoDevices();
  }, []);

  return { videoDevicesList, betterDeviceId };
};
