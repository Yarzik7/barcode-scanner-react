import Quagga from 'quagga';
import { useEffect } from 'react';

export const useQuaggaScanner = (deviceId, onSetBarcode) => {
  useEffect(() => {
    // const canva = document.getElementsByClassName('drawingBuffer');
    // const card = document.getElementById('card');
    // const ctx = canva.getContext('2d');

    const onBarcodeDetected = result => {
      onSetBarcode(result.codeResult.code);

      // Quagga.offDetected(onBarcodeDetected);
      // setTimeout(function () {
      //   Quagga.onDetected(onBarcodeDetected);
      // }, 2000); // Наприклад, після 2 секунд

      // card.style.backgroundImage = `url(${canva.toDataURL('image/jpeg')})`;
      Quagga.stop();
    };

    const onBarcodeDetected2 = result => {
      onSetBarcode(result.codeResult.code);

      // Зупинити сканування
      Quagga.stop();

      // Почекати кілька секунд і потім знову запустити сканування
      setTimeout(function () {
        Quagga.start();
      }, 2000); // Наприклад, після 2 секунд
    };

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
            'code_39_reader',
            'code_39_vin_reader',
            'codabar_reader',
            'upc_e_reader',
            'i2of5_reader',
            '2of5_reader',
            'code_93_reader',
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

    // alert('canva ', JSON.stringify(canva, null, 2));
    // const canva = document.getElementsByClassName('drawingBuffer');
    // const canva = document.getElementById('canva');
    // const card = document.getElementById('card');
    const imga = document.getElementById('imga');
    const video = document.getElementsByTagName('video');
    console.log(video);

    Quagga.onProcessed(() => {
      // const width = video[0]?.videoWidth;
      // const height = video[0]?.videoHeight;
      // canva.width = width;
      // canva.height = height;
      // const ctx = canva?.getContext('2d');

      // ctx.drawImage(video[0], 0, 0, width, height);
      // imga.src = canva?.toDataURL('image/jpeg');

      var mediaStream = video[0].captureStream();
      console.log(mediaStream);
      // var blobURL = URL.createObjectURL(mediaStream);
      // imga.src = blobURL;
    });

    // Quagga.onProcessed(function (result) {
    //   if (result && result.boxes) {
    //     // result.boxes.forEach(function (box) {
    //     //   // Відобразити область, де виявлено штрихкод
    //     //   var canvas = document.createElement('canvas');
    //     //   var ctx = canvas.getContext('2d');
    //     //   var imageData = ctx.getImageData(box.top, box.left, box.width, box.height);
    //     //   // imageData містить зображення з областю штрихкоду
    //     //   alert(imageData);
    //     // });
    //     alert(JSON.stringify(result, null, 2));
    //   }
    // });

    Quagga.onDetected(onBarcodeDetected);

    return () => {
      Quagga.stop();
    };
  }, [deviceId, onSetBarcode]);
};

export default useQuaggaScanner;
