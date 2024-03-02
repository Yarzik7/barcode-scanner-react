import Input from 'components/Input/Input';
import scss from './CreateBarcode.module.scss';

const CreateBarcode = () => {
  return (
    <div className={scss.createBarcodeContainer}>
      <Input label="Barcode" placeholder="Enter barcode" />
    </div>
  );
};

export default CreateBarcode;
