import Application from 'components/Application/Application';
import Header from 'components/Header/Header';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import { useVideoDevices } from 'hooks';
import { useState, useEffect } from 'react';

function App() {
  const { betterDeviceId } = useVideoDevices();
  const [deviceId, setDeviceId] = useState(() => betterDeviceId);
  const [deviceName, setDeviceName] = useState('');
  const [isStartScann, setIsScannStart] = useState(false);

  useEffect(() => {
    setDeviceId(betterDeviceId);
  }, [betterDeviceId]);

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
        />
      </main>
      <ControlPanel setIsScannStart={onToggleStartScann} />
    </>
  );
}

export default App;
