import scss from './Scanner.module.scss';
import { useQuaggaScanner } from 'hooks';

const Scanner = ({ deviceId, onSetBarcode, setIsScannStart }) => {
  const handleSetBarCode = barcode => {
    onSetBarcode(barcode);
    setIsScannStart(false);
  };

  useQuaggaScanner(deviceId, handleSetBarCode);

  return (
    <div id="scanner-container" className={scss.scanner}>
      <div className={scss.scanOverlay}></div>
      <div className={scss.scanField}></div>
    </div>
  );
};

export default Scanner;
