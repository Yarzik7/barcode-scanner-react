import Button from '../Button/Button';
import Icon from 'components/Icon/Icon';
import Container from 'components/Container/Container';
import { classNameJoin } from 'utils';
import scss from './ControlPanel.module.scss';

const ControlPanel = ({ setIsScannStart, setMode, mode, className = '' }) => {
  const onScannStart = () => {
    setIsScannStart();
  };

  const onSetMode = (mode, onClick = () => {}) => {
    setMode(mode);
    onClick();
  };

  const buttonsList = [
    // { buttonMode: 'home' },
    { buttonMode: 'createcode' },
    { buttonMode: 'codescanner', onClick: onScannStart },
    { buttonMode: 'settings' },
  ];

  return (
    <div className={classNameJoin(scss.controlPanel, className)}>
      <Container className={scss.controlPanelContentBox}>
        {buttonsList.map(({ buttonMode, onClick }, idx) => (
          <Button
            key={idx}
            onClick={() => {
              onSetMode(buttonMode, onClick);
            }}
            isActive={buttonMode === mode}
          >
            <Icon iconName={buttonMode} />
          </Button>
        ))}
      </Container>
    </div>
  );
};

export default ControlPanel;
