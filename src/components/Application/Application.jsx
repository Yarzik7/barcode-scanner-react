import Section from '../Section/Section';
import BarcodeScanner from 'components/BarcodeScanner/BarcodeScanner';
import Settings from 'components/Settings/Settings';
import { useState } from 'react';
import scss from './Application.module.scss';

const App = ({ isStartScann, setIsScannStart, deviceId, mode, onSetScannDevice, deviceName }) => {
  const [barcode, setBarcode] = useState('');
  return (
    <Section className={scss.appSection} containerClassName={scss.appContainer}>
      {mode === 'codescanner' && (
        <BarcodeScanner
          onSetBarcode={setBarcode}
          deviceId={deviceId}
          isStartScann={isStartScann}
          setIsScannStart={setIsScannStart}
          barcode={barcode}
        />
      )}

      {mode === 'settings' && (
        <Settings onSetScannDevice={onSetScannDevice} deviceName={deviceName} />
      )}
    </Section>
  );
};

export default App;
