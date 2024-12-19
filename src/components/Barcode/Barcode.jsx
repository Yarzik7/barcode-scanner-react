import JsBarcode from 'jsbarcode';
import { useEffect } from 'react';
import scss from './Barcode.module.scss';

const Barcode = ({ barcode }) => {
  useEffect(() => {
    try {
      barcode &&
        JsBarcode('#barcode', barcode, {
          width: 2,
          height: 50,
          displayValue: true,
          fontSize: 27,
        });
    } catch (error) {
      alert(error);
    }
  }, [barcode]);
  return <svg id="barcode" className={scss.barcode}></svg>;
};

export default Barcode;
