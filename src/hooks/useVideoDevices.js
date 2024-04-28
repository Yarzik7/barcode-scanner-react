import { useEffect, useState } from 'react';

export const useVideoDevices = () => {
  const [videoDevicesList, setVideoDevicesList] = useState([]);
  const [betterDeviceId, setBetterDeviceId] = useState('');
  const [betterDeviceName, setBetterDeviceName] = useState('');

  useEffect(() => {
    const getVideoDevices = async () => {
      console.log(navigator.mediaDevices.getUserMedia);
      if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
        let res;
        try {
          res = await navigator.mediaDevices.getUserMedia({ video: true });
        } catch (error) {
          console.log(error);
        }
        console.log(res);
      }

      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoinputDevices = devices.filter(({ kind }) => kind === 'videoinput');
      console.log('list', videoinputDevices);
      console.log('0', videoinputDevices[0]);
      console.log('1', videoinputDevices[1]);
      console.log('9', videoinputDevices[9]);
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
