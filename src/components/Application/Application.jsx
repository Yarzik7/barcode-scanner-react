import Section from '../Section/Section';
// import MediaContainer from '../MediaContainer/MediaContainer';
// import BarcodeContainer from '../BarcodeContainer/BarcodeContainer';
import BarcodeScanner from 'components/BarcodeScanner/BarcodeScanner';
import Settings from 'components/Settings/Settings';
import { useState } from 'react';
import scss from './Application.module.scss';

const App = ({ isStartScann, setIsScannStart, deviceId, mode }) => {
  const [barcode, setBarcode] = useState('');
  return (
    <Section className={scss.appSection} containerClassName={scss.appContainer}>
      {/* <MediaContainer
        onSetBarcode={setBarcode}
        deviceId={deviceId}
        isStartScann={isStartScann}
        setIsScannStart={setIsScannStart}
      />
      <BarcodeContainer barcode={barcode} /> */}
      {mode === 'barcode-scanner' && (
        <BarcodeScanner
          onSetBarcode={setBarcode}
          deviceId={deviceId}
          isStartScann={isStartScann}
          setIsScannStart={setIsScannStart}
          barcode={barcode}
        />
      )}

      {mode === 'settings' && <Settings />}
    </Section>
  );
};

export default App;
