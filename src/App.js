import Application from 'components/Application/Application';
import Header from 'components/Header/Header';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import { useState } from 'react';

function App() {
  const [deviceId, setDeviceId] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [isStartScann, setIsScannStart] = useState(false);

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
        <Application deviceId={deviceId} isStartScann={isStartScann} />
      </main>
      <ControlPanel setIsScannStart={onToggleStartScann} />
    </>
  );
}

export default App;
