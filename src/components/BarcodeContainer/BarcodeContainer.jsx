import BarcodeCard from "../BarcodeCard/BarcodeCard";
import scss from "./BarcodeContainer.module.scss";

const BarcodeContainer = ({barcode}) => {
  return (
    <div className={scss.barcodeContainer}>
      <BarcodeCard barcode={barcode} />
    </div>
  );
};

export default BarcodeContainer;
