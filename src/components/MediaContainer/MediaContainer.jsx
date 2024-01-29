import Scanner from '../Scanner/Scanner';
import { useState, useRef } from 'react';
import Loader from 'components/Loader/Loader';
import scss from './MediaContainer.module.scss';
// import { useVideoDevices } from 'hooks';

// const styles = {
//   width: 246,
//   backgroundColor: 'yellow',
//   minHeight: 10,
//   marginTop: 5,
//   overflow: 'hidden',
// };

const MediaContainer = ({ isStartScann, setIsScannStart, deviceId, onSetBarcode }) => {
  // const { videoDevicesList } = useVideoDevices();
  const [isLoader, setIsLoader] = useState(false);
  const [mediaContainerBg, setMediaContainerBg] = useState('');
  const mediaContainerRef = useRef();

  return (
    <div
      ref={mediaContainerRef}
      className={scss.mediaContainer}
      style={{ backgroundImage: `url(${mediaContainerBg})` }}
    >
      {/* <ul style={{ overflow: 'scroll', height: '100%' }}>
        {[...videoDevicesList].map((dev, idx) => (
          <li key={idx} style={styles}>
            <p>{dev.label}</p>
            <p>{JSON.stringify(dev.getCapabilities(), null, '\n')}</p>
          </li>
        ))}
      </ul> */}
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
