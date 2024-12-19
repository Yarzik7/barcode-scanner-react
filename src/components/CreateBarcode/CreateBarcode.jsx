import { useState } from 'react';

import { INVALID_CHARS_REGEXP } from 'constants/barcode/regexp';

import Input from 'components/Input/Input';
import BarcodeCard from 'components/BarcodeCard/BarcodeCard';

import scss from './CreateBarcode.module.scss';

const CreateBarcode = () => {
  const [barcode, setBarcode] = useState('');

  const onChange = event => {
    const { value } = event.target;

    if (INVALID_CHARS_REGEXP.test(value)) {
      event.preventDefault();
      event.target.value = barcode;
      return;
    }

    setBarcode(value);
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
