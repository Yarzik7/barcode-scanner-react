import Quagga from 'quagga';
import { useEffect } from 'react';

export const useQuaggaScanner = (deviceId, onSetBarcode) => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.getElementById('scanner-container'),
          constraints: {
            width: 640,
            height: 480,
            facingMode: 'environment',
            deviceId,
          },
          area: {
            top: '35%',
            right: '10%',
            left: '10%',
            bottom: '35%',
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        decoder: {
          readers: [
            'ean_reader',
            'upc_reader',
            'code_128_reader',
            'ean_8_reader',
            // 'code_39_reader',
            // 'code_39_vin_reader',
            // 'codabar_reader',
            // 'upc_e_reader',
            // 'i2of5_reader',
            // '2of5_reader',
            // 'code_93_reader',
          ],
        },
      },
      function (err) {
        if (err) {
          console.error('Помилка) ', err);
          return;
        }
        Quagga.start();
      }
    );

    const onBarcodeDetected = result => {
      const video = document.querySelector('#scanner-container video');
      const canvas = document.createElement('canvas');

      canvas.width = video?.videoWidth;
      canvas.height = video?.videoHeight;

      const canvasCtx = canvas.getContext('2d');

      canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);

      onSetBarcode(result.codeResult.code, canvas.toDataURL('image/jpeg'));
    };

    Quagga.onDetected(onBarcodeDetected);

    return () => {
      Quagga.stop();
    };
  }, [deviceId, onSetBarcode]);
};

export default useQuaggaScanner;
