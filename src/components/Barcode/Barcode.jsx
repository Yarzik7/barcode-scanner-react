import JsBarcode from 'jsbarcode';
import { useEffect } from 'react';
import scss from './Barcode.module.scss';

const Barcode = ({ barcode }) => {
  useEffect(() => {
    barcode &&
      JsBarcode('#barcode', barcode, {
        width: 2,
        height: 65,
        displayValue: true,
        fontSize: 27,
      });
  }, [barcode]);
  return <svg id="barcode" className={scss.barcode}></svg>;
};

export default Barcode;
