import JsBarcode from 'jsbarcode';
import { useEffect } from 'react';

const Barcode = ({ barcode }) => {
  useEffect(() => {
    barcode &&
      JsBarcode('#barcode', barcode, {
        width: 2,
        height: 100,
        displayValue: true,
        fontSize: 27,
      });
  }, [barcode]);
  return <svg id="barcode"></svg>;
};

export default Barcode;
