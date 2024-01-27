import Scanner from "../Scanner/Scanner";
import scss from "./MediaContainer.module.scss";

const MediaContainer = ({ isStartScann, deviceId, onSetBarcode }) => {
  return (
    <div className={scss.mediaContainer}>
      {isStartScann && (
        <Scanner onSetBarcode={onSetBarcode} deviceId={deviceId} />
      )}
    </div>
  );
};

export default MediaContainer;
