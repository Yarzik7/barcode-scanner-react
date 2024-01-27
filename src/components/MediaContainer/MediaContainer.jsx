import Scanner from '../Scanner/Scanner';
import scss from './MediaContainer.module.scss';
// import { useState, useEffect } from 'react';
import { useVideoDevices } from 'hooks';

// const getDev = async () => {
//   const res = await navigator.mediaDevices.getUserMedia({ video: true });
//   // console.log(res.getVideoTracks()[0].getSettings());
//   return res.getAudioTracks();
// };

const styles = {
  width: 246,
  backgroundColor: 'yellow',
  minHeight: 10,
  marginTop: 5,
  overflow: 'hidden',
};

const MediaContainer = ({ isStartScann, deviceId, onSetBarcode }) => {
  // const [dev, setDev] = useState([]);
  // console.log(dev);

  // useEffect(() => {
  //   const getDev = async () => {
  //     const res = await navigator.mediaDevices.getUserMedia({ video: true });
  //     // console.log(res.getVideoTracks()[0].getSettings());
  //     setDev([...res.getVideoTracks()]);
  //   };
  //   getDev();
  // }, []);

  const dev = useVideoDevices();

  return (
    <div className={scss.mediaContainer}>
      <ul style={{ overflow: 'scroll', height: '100%' }}>
        {[...dev].map((dev, idx) => (
          <li key={idx} style={styles}>
            <p>{dev.label}</p>
            <p>{JSON.stringify(dev.getCapabilities(), null, '\n')}</p>
          </li>
        ))}
      </ul>
      {false && <Scanner onSetBarcode={onSetBarcode} deviceId={deviceId} />}
    </div>
  );
};

export default MediaContainer;
