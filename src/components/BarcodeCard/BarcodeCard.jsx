import Barcode from 'components/Barcode/Barcode';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';
import scss from './BarcodeCard.module.scss';

const BarcodeCard = ({ barcode }) => {
  return (
    <div id="card" className={scss.barcodeCard}>
      {barcode ? (
        <div className={scss.barcodeCardContent}>
          <div className={scss.barcodeCardMenu}>
            <Link
              className={scss.barcodeCardMenuButton}
              link={'https://www.google.com/search?q=' + barcode}
            >
              <Icon iconName="search" className={scss.barcodeCardMenuIcon} />
            </Link>
          </div>
          <Barcode barcode={barcode} />
        </div>
      ) : (
        <p className={scss.barcodeCardMessage}>There will be a barcode here</p>
      )}
    </div>
  );
};

export default BarcodeCard;
