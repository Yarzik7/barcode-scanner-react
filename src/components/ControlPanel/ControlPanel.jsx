import Button from '../Button/Button';
import Icon from 'components/Icon/Icon';
import { classNameJoin } from 'utils';
import scss from './ControlPanel.module.scss';

const ControlPanel = ({ setIsScannStart, setMode, className }) => {
  const onScannStart = () => {
    setMode('barcode-scanner');
    setIsScannStart();
  };

  const onSettingsMode = () => {
    setMode('settings');
  };

  return (
    <div className={classNameJoin(scss.controlPanel, className)}>
      <Button onClick={onScannStart}>
        <Icon iconName="barcode" />
      </Button>
      <Button onClick={onSettingsMode}>
        <Icon iconName="settings" />
      </Button>
    </div>
  );
};

export default ControlPanel;
