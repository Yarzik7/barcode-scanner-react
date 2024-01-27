import scss from "./BarcodeCard.module.scss";

const BarcodeCard = ({ barcode }) => {
  return <div className={scss.barcodeCard}>{barcode}</div>;
};

export default BarcodeCard;
