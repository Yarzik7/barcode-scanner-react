import { SelectOption } from '../SelectOption/SelectOption';
import scss from './SelectOptionList.module.scss';

const SelectOptionList = ({ setSelect, onClick, list = [] }) => {
  return (
    <div className={scss.selectOptionListContainer}>
      <ul className={scss.selectOptionList}>
        {!list.length && <li className={scss.listEmptyMessage}>Camera list is empty!</li>}
        {list.map((content, idx) => (
          <SelectOption key={idx} content={content} setSelect={setSelect} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
};

export default SelectOptionList;
