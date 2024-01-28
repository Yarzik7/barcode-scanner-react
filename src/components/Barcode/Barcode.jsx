import JsBarcode from 'jsbarcode';
import { useEffect } from 'react';
import scss from './Barcode.module.scss';

const Barcode = ({ barcode }) => {
  useEffect(() => {
    barcode && JsBarcode('#barcode', barcode);
  }, [barcode]);
  return <svg id="barcode"></svg>;
};

export default Barcode;
