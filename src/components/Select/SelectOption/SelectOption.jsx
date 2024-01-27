import scss from "./SelectOption.module.scss";

export const SelectOption = ({ setSelect, onClick, content }) => {
  const onSetSelectValue = () => {
    setSelect(content.deviceId, content.label);
    onClick();
  };
  
  return (
    <li className={scss.selectOption} onClick={onSetSelectValue}>
      {content.label}
    </li>
  );
};
