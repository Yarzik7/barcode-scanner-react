import Button from '../Button/Button';
import Icon from 'components/Icon/Icon';
import { useState } from 'react';
import { classNameJoin } from 'utils';
import scss from './ControlPanel.module.scss';

const ControlPanel = ({ setIsScannStart, setMode, className = '' }) => {
  const [activeMode, setActiveMode] = useState(0);

  const onScannStart = () => {
    setMode('barcode-scanner');
    setIsScannStart();
  };

  const onSettingsMode = () => {
    setMode('settings');
  };

  const onQrScannMode = () => {
    setMode('qrcode');
  };

  const buttonsList = [
    { iconName: 'barcode', onClick: onScannStart },
    { iconName: 'settings', onClick: onSettingsMode },
    { iconName: 'qrcode', onClick: onSettingsMode },
    { iconName: 'barcode', onClick: onScannStart },
    { iconName: 'settings', onClick: onSettingsMode },
    { iconName: 'qrcode', onClick: onSettingsMode },
  ];

  return (
    <div className={classNameJoin(scss.controlPanel, className)}>
      <div className={scss.controlPanelContentBox}>
        {/* <Button onClick={onScannStart}>
          <Icon iconName="barcode" />
        </Button>
        <Button onClick={onSettingsMode}>
          <Icon iconName="settings" />
        </Button>
        <Button onClick={onQrScannMode}>
          <Icon iconName="qrcode" />
        </Button> */}
        {/* {} */}
        {/* <Button onClick={onScannStart}>
          <Icon iconName="barcode" />
        </Button>
        <Button onClick={onSettingsMode}>
          <Icon iconName="settings" />
        </Button>
        <Button onClick={onQrScannMode}>
          <Icon iconName="qrcode" />
        </Button> */}
        {buttonsList.map(({ iconName, onClick }, idx) => (
          <Button
            key={idx}
            onClick={() => {
              setActiveMode(idx);
              onClick();
            }}
            isActive={activeMode === idx}
          >
            <Icon iconName={iconName} />
          </Button>
        ))}
        <Button className="indicator"></Button>
      </div>
    </div>
  );
};

export default ControlPanel;
