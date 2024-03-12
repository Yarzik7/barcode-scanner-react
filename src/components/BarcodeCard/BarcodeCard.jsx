import Barcode from 'components/Barcode/Barcode';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';
import scss from './BarcodeCard.module.scss';

const BarcodeCard = ({ barcode }) => {
  return (
    <div id="card" className={scss.barcodeCard}>
      {barcode && (
        <>
          <div className={scss.barcodeCardMenu}>
            <Link link={'https://www.google.com/search?q=' + barcode}>
              <Icon iconName="search" className={scss.barcodeCardMenuIcon} />
            </Link>
          </div>
          <Barcode barcode={barcode} />
        </>
      )}
    </div>
  );
};

export default BarcodeCard;
