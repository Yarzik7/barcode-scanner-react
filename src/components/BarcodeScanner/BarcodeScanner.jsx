import MediaContainer from '../MediaContainer/MediaContainer';
import BarcodeContainer from '../BarcodeContainer/BarcodeContainer';
import scss from './BarcodeScanner.module.scss';

const BarcodeScanner = ({
  onSetBarcode,
  deviceId,
  isStartScann,
  setIsScannStart,
  barcode,
  cameraAccessError,
}) => {
  return (
    <div className={scss.barcodeScannerContainer}>
      {!cameraAccessError ? (
        <MediaContainer
          onSetBarcode={onSetBarcode}
          deviceId={deviceId}
          isStartScann={isStartScann}
          setIsScannStart={setIsScannStart}
        />
      ) : (
        <p className={scss.cameraAccessError}>{cameraAccessError}</p>
      )}
      <BarcodeContainer barcode={barcode} />
    </div>
  );
};

export default BarcodeScanner;
