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

  const onBarcodeListScannMode = () => {
    setMode('barcode list scann');
  };

  const buttonsList = [
    { iconName: 'barcode', onClick: onScannStart },
    { iconName: 'settings', onClick: onSettingsMode },
    { iconName: 'barcode list scann', onClick: onBarcodeListScannMode },
  ];

  return (
    <div className={classNameJoin(scss.controlPanel, className)}>
      <div className={scss.controlPanelContentBox}>
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
      </div>
    </div>
  );
};

export default ControlPanel;
