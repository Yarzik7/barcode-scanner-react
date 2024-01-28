import Scanner from '../Scanner/Scanner';
import scss from './MediaContainer.module.scss';
// import { useVideoDevices } from 'hooks';

// const styles = {
//   width: 246,
//   backgroundColor: 'yellow',
//   minHeight: 10,
//   marginTop: 5,
//   overflow: 'hidden',
// };

const MediaContainer = ({ isStartScann, deviceId, onSetBarcode }) => {
  // const { videoDevicesList } = useVideoDevices();

  return (
    <div className={scss.mediaContainer}>
      {/* <ul style={{ overflow: 'scroll', height: '100%' }}>
        {[...videoDevicesList].map((dev, idx) => (
          <li key={idx} style={styles}>
            <p>{dev.label}</p>
            <p>{JSON.stringify(dev.getCapabilities(), null, '\n')}</p>
          </li>
        ))}
      </ul> */}
      {isStartScann && <Scanner onSetBarcode={onSetBarcode} deviceId={deviceId} />}
    </div>
  );
};

export default MediaContainer;
