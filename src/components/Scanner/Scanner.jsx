import scss from './Scanner.module.scss';
import { useQuaggaScanner } from 'hooks';

const Scanner = ({ deviceId, onSetBarcode, setIsScannStart, setIsLoader, setMediaContainerBg }) => {
  const handleSetBarCode = (barcode, src) => {
    setIsScannStart(false);
    onSetBarcode(barcode);
    setIsLoader(true);
    setMediaContainerBg(src);
    // setIsScannStart(false);
    setTimeout(() => setIsLoader(false), 4000);
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
