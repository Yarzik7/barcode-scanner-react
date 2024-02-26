import scss from './SelectOption.module.scss';

export const SelectOption = ({ setSelect, onClick, content: { deviceId, label } }) => {
  const onSetSelectValue = () => {
    setSelect(deviceId, label);
    onClick();
  };

  return (
    <li className={scss.selectOption} onClick={onSetSelectValue}>
      {label}
    </li>
  );
};
