import Scanner from '../Scanner/Scanner';
import { useState, useRef } from 'react';
import Loader from 'components/Loader/Loader';
import scss from './MediaContainer.module.scss';

const MediaContainer = ({ isStartScann, setIsScannStart, deviceId, onSetBarcode }) => {
  const [isLoader, setIsLoader] = useState(false);
  const [mediaContainerBg, setMediaContainerBg] = useState('');
  const mediaContainerRef = useRef();

  return (
    <div
      ref={mediaContainerRef}
      className={scss.mediaContainer}
      style={{ backgroundImage: `url(${mediaContainerBg})` }}
    >
      {isStartScann && (
        <Scanner
          onSetBarcode={onSetBarcode}
          deviceId={deviceId}
          setIsScannStart={setIsScannStart}
          setIsLoader={setIsLoader}
          setMediaContainerBg={setMediaContainerBg}
        />
      )}
      {isLoader && <Loader />}
    </div>
  );
};

export default MediaContainer;
