import Button from '../Button/Button';
import Icon from 'components/Icon/Icon';
import Container from 'components/Container/Container';
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

  const onCreateCode = () => {
    setMode('create code');
  };

  const onHome = () => {
    setMode('home');
  };

  const buttonsList = [
    { iconName: 'home', onClick: onHome },
    { iconName: 'codescanner', onClick: onScannStart },
    { iconName: 'createcode', onClick: onCreateCode },
    { iconName: 'settings', onClick: onSettingsMode },
  ];

  return (
    <div className={classNameJoin(scss.controlPanel, className)}>
      <Container className={scss.controlPanelContentBox}>
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
      </Container>
    </div>
  );
};

export default ControlPanel;
