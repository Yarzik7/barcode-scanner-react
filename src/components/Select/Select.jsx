import SelectOptionList from './SelectOptionList/SelectOptionList';
import Icon from 'components/Icon/Icon';
import { useState, useId } from 'react';
import { classNameJoin } from 'utils';
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
        className={classNameJoin(scss.select, showOptionList ? scss.isOpenSelectList : '')}
        placeholder="Select"
        aria-label="select"
        readOnly
        onClick={onToggleShowOptionList}
      />
      <span className={scss.chevron} onClick={onToggleShowOptionList}>
        <Icon
          iconName="chevron"
          className={classNameJoin(scss.icon, showOptionList ? scss.isOpened : '')}
        />
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
