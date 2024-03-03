import Input from 'components/Input/Input';
import BarcodeCard from 'components/BarcodeCard/BarcodeCard';
import { useState } from 'react';
import scss from './CreateBarcode.module.scss';

const CreateBarcode = () => {
  const [barcode, setBarcode] = useState('');

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'barcode':
        setBarcode(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={scss.createBarcodeContainer}>
      <Input
        label="Barcode"
        placeholder="Enter barcode"
        name="barcode"
        value={barcode}
        onChange={onChange}
      />
      <div className={scss.barcodeContainer}>
        <BarcodeCard barcode={barcode} />
      </div>
    </div>
  );
};

export default CreateBarcode;
