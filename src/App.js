import Application from 'components/Application/Application';
import Header from 'components/Header/Header';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import { useVideoDevices } from 'hooks';
import { useState, useEffect } from 'react';

function App() {
  const { betterDeviceId, betterDeviceName, videoDevicesList, cameraAccessError } =
    useVideoDevices();
  const [deviceId, setDeviceId] = useState(() => betterDeviceId);
  const [deviceName, setDeviceName] = useState('');
  const [isStartScann, setIsScannStart] = useState(true);
  const [mode, setMode] = useState('codescanner');
  // const [errors, setErrors] = useState({ cameraAccess: null, scannerInit: null });

  useEffect(() => {
    setDeviceId(betterDeviceId);
    setDeviceName(betterDeviceName);
  }, [betterDeviceId, betterDeviceName]);

  const onSetScannDevice = (deviceId, deviceName) => {
    setDeviceId(deviceId);
    setDeviceName(deviceName);
  };

  const onStartScann = () => setIsScannStart(true);

  return (
    <>
      <Header />
      <main>
        <Application
          deviceId={deviceId}
          isStartScann={isStartScann}
          setIsScannStart={setIsScannStart}
          onSetScannDevice={onSetScannDevice}
          deviceName={deviceName}
          videoDevicesList={videoDevicesList}
          cameraAccessError={cameraAccessError}
          mode={mode}
        />
      </main>
      <ControlPanel setIsScannStart={onStartScann} setMode={setMode} mode={mode} />
    </>
  );
}

export default App;
