import Button from '../Button/Button';
import Icon from 'components/Icon/Icon';
import Container from 'components/Container/Container';
import { useState } from 'react';
import { classNameJoin } from 'utils';
import scss from './ControlPanel.module.scss';

const ControlPanel = ({ setIsScannStart, setMode, mode, className = '' }) => {
  const [activeMode, setActiveMode] = useState(0);

  const onScannStart = () => {
    setMode('codescanner');
    setIsScannStart();
  };

  const onSettingsMode = () => {
    setMode('settings');
  };

  const onCreateCode = () => {
    setMode('createcode');
  };

  const onHome = () => {
    setMode('home');
  };

  const onSetMode = mode => setMode(mode);

  const buttonsList = [
    { buttonMode: 'home', onClick: onHome },
    { buttonMode: 'codescanner', onClick: onScannStart },
    { buttonMode: 'createcode', onClick: onCreateCode },
    { buttonMode: 'settings', onClick: onSettingsMode },
  ];

  return (
    <div className={classNameJoin(scss.controlPanel, className)}>
      <Container className={scss.controlPanelContentBox}>
        {buttonsList.map(({ buttonMode, onClick }, idx) => (
          <Button
            key={idx}
            onClick={() => {
              // setActiveMode(idx);
              onSetMode(buttonMode);
            }}
            // mode={mode}
            isActive={buttonMode === mode}
          >
            <Icon iconName={mode} />
          </Button>
        ))}
      </Container>
    </div>
  );
};

export default ControlPanel;
