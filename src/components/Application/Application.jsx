import Section from '../Section/Section';
import MediaContainer from '../MediaContainer/MediaContainer';
import BarcodeContainer from '../BarcodeContainer/BarcodeContainer';
import { useState } from 'react';
import scss from './Application.module.scss';

const App = ({ isStartScann, deviceId }) => {
  const [barcode, setBarcode] = useState('');
  return (
    <Section className={scss.appSection} containerClassName={scss.appContainer}>
      <MediaContainer onSetBarcode={setBarcode} deviceId={deviceId} isStartScann={isStartScann} />
      <BarcodeContainer barcode={barcode} />
    </Section>
  );
};

export default App;
