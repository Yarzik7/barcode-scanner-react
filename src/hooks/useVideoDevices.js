import { useEffect, useState } from 'react';

export const useVideoDevices = () => {
  const [videoDevicesList, setVideoDevicesList] = useState([]);
  const [betterDeviceId, setBetterDeviceId] = useState('');
  const [betterDeviceName, setBetterDeviceName] = useState('');

  useEffect(() => {
    const getVideoDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoinputDevices = devices.filter(({ kind }) => kind === 'videoinput');
      const betterVideoDevice = videoinputDevices
        .map(device => {
          const capabilities = device.getCapabilities();
          capabilities.label = device.label;
          return capabilities;
        })
        .sort(({ aspectRatio: { max: maxP } }, { aspectRatio: { max: maxN } }) => maxN - maxP)[0];
      setVideoDevicesList(videoinputDevices);
      setBetterDeviceId(betterVideoDevice.deviceId);
      setBetterDeviceName(betterVideoDevice.label);
    };

    getVideoDevices();
  }, []);

  return { videoDevicesList, betterDeviceId, betterDeviceName };
};
