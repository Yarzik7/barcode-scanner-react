import { useEffect, useState } from 'react';

export const useVideoDevices = () => {
  const [videoDevicesList, setVideoDevicesList] = useState([]);
  const [betterDeviceId, setBetterDeviceId] = useState('');
  const [betterDeviceName, setBetterDeviceName] = useState('');
  const [cameraAccessError, setCameraAccessError] = useState(null);

  useEffect(() => {
    const getVideoDevices = async () => {
      if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
        try {
          await navigator.mediaDevices.getUserMedia({ video: true });
        } catch (error) {
          console.log(error);
        }
      }

      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoinputDevices = devices.filter(({ kind }) => kind === 'videoinput');

      if (!videoinputDevices[0]?.deviceId) {
        setCameraAccessError('Unable to access device camera!');
        return;
      }

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

  return { videoDevicesList, betterDeviceId, betterDeviceName, cameraAccessError };
};
