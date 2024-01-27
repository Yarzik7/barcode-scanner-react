import { SelectOption } from "../SelectOption/SelectOption";
import scss from "./SelectOptionList.module.scss";

const SelectOptionList = ({ setSelect, onClick, list = [] }) => {
  return (
    <div className={scss.selectOptionListContainer}>
      <ul className={scss.selectOptionList}>
        {list.map((content, idx) => (
          <SelectOption
            key={idx}
            content={content}
            setSelect={setSelect}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectOptionList;
