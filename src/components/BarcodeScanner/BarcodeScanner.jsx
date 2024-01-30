import MediaContainer from '../MediaContainer/MediaContainer';
import BarcodeContainer from '../BarcodeContainer/BarcodeContainer';
// import scss from './BarcodeScanner.scss';

const BarcodeScanner = ({ onSetBarcode, deviceId, isStartScann, setIsScannStart, barcode }) => {
  return (
    <>
      <MediaContainer
        onSetBarcode={onSetBarcode}
        deviceId={deviceId}
        isStartScann={isStartScann}
        setIsScannStart={setIsScannStart}
      />
      <BarcodeContainer barcode={barcode} />
    </>
  );
};

export default BarcodeScanner;
