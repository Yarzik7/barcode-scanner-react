import Barcode from 'components/Barcode/Barcode';
import scss from './BarcodeCard.module.scss';

const BarcodeCard = ({ barcode }) => {
  return (
    <div id="card" className={scss.barcodeCard}>
      <Barcode barcode={barcode} />
    </div>
  );
};

export default BarcodeCard;
