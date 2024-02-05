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
            width: 800,
            height: 1080,
            facingMode: 'environment',
            deviceId,
          },
          area: {
            top: '30%',
            right: '8%',
            left: '8%',
            bottom: '30%',
          },
        },
        numOfWorkers: 8,
        frequency: 20,
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        decoder: {
          readers: ['ean_reader', 'upc_reader', 'code_128_reader', 'ean_8_reader'],
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

    const video = document.querySelector('#scanner-container video');
    const canvas = document.createElement('canvas');
    const canvasCtx = canvas.getContext('2d');

    const onBarcodeDetected = result => {
      canvas.width = video?.videoWidth;
      canvas.height = video?.videoHeight;

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
