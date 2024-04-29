import { useEffect, useState } from 'react';
import { getCameraAccess } from 'utils';

export const useVideoDevices = () => {
  const [videoDevicesList, setVideoDevicesList] = useState([]);
  const [betterDeviceId, setBetterDeviceId] = useState('');
  const [betterDeviceName, setBetterDeviceName] = useState('');
  const [cameraAccessError, setCameraAccessError] = useState(null);

  useEffect(() => {
    const getVideoDevices = async () => {
      const requestResult = await getCameraAccess();

      if (!requestResult) {
        setCameraAccessError('Unable to access device camera!');
        return;
      }

      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoinputDevices = devices.filter(({ kind }) => kind === 'videoinput');

      if (!videoinputDevices[0]?.deviceId) {
        setCameraAccessError('Camera not found!');
        return;
      }

      const betterVideoDevice = videoinputDevices[videoinputDevices.length - 1];
      // .map(device => {
      //   const capabilities = device.getCapabilities();
      //   capabilities.label = device.label;
      //   return capabilities;
      // })
      // .sort(({ aspectRatio: { max: maxP } }, { aspectRatio: { max: maxN } }) => maxN - maxP)[0];

      setVideoDevicesList(videoinputDevices);
      setBetterDeviceId(betterVideoDevice.deviceId);
      setBetterDeviceName(betterVideoDevice.label);
    };

    getVideoDevices();
  }, []);

  return { videoDevicesList, betterDeviceId, betterDeviceName, cameraAccessError };
};
