import Barcode from 'components/Barcode/Barcode';
import scss from './BarcodeCard.module.scss';

const BarcodeCard = ({ barcode }) => {
  return (
    <div id="card" className={scss.barcodeCard}>
      {/* <Barcode barcode={barcode} /> */}
      <img id="imga" src="" alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};

export default BarcodeCard;
