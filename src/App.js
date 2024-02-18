import Application from 'components/Application/Application';
import Header from 'components/Header/Header';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import { useVideoDevices } from 'hooks';
import { useState, useEffect } from 'react';

function App() {
  const { betterDeviceId, betterDeviceName } = useVideoDevices();
  const [deviceId, setDeviceId] = useState(() => betterDeviceId);
  const [deviceName, setDeviceName] = useState('');
  const [isStartScann, setIsScannStart] = useState(false);
  const [mode, setMode] = useState('home');

  useEffect(() => {
    setDeviceId(betterDeviceId);
    setDeviceName(betterDeviceName);
  }, [betterDeviceId, betterDeviceName]);

  const onSetScannDevice = (deviceId, deviceName) => {
    setDeviceId(deviceId);
    setDeviceName(deviceName);
    if (isStartScann) {
      setIsScannStart(false);
    }
  };

  const onToggleStartScann = () => setIsScannStart(!isStartScann);

  return (
    <>
      <Header onSetScannDevice={onSetScannDevice} deviceName={deviceName} />
      <main>
        <Application
          deviceId={deviceId}
          isStartScann={isStartScann}
          setIsScannStart={setIsScannStart}
          onSetScannDevice={onSetScannDevice}
          deviceName={deviceName}
          mode={mode}
        />
      </main>
      <ControlPanel setIsScannStart={onToggleStartScann} setMode={setMode} mode={mode} />
    </>
  );
}

export default App;
