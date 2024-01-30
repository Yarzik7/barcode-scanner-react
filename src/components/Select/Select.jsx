import SelectOptionList from './SelectOptionList/SelectOptionList';
import { useState, useId } from 'react';
import scss from './Select.module.scss';

const Select = ({ videoDevicesList, deviceName, onSetScannDevice, label = 'label' }) => {
  const [showOptionList, setShowOptionList] = useState(false);
  const selectId = useId();

  const onToggleShowOptionList = () => setShowOptionList(!showOptionList);

  return (
    <div className={scss.selectContainer}>
      <label htmlFor={selectId} className={scss.selectLabel}>
        {label}
      </label>
      <input
        id={selectId}
        name="select"
        value={deviceName}
        className={scss.select}
        placeholder="Select"
        aria-label="select"
        readOnly
        onClick={onToggleShowOptionList}
      />
      <span className={scss.chevron} onClick={onToggleShowOptionList}>
        ^
      </span>
      {showOptionList && (
        <SelectOptionList
          setSelect={onSetScannDevice}
          onClick={onToggleShowOptionList}
          list={videoDevicesList}
        />
      )}
    </div>
  );
};

export default Select;
