import { useId } from 'react';
import scss from './Input.module.scss';

const Input = ({ label = 'label', placeholder = 'input' }) => {
  const inputId = useId();

  return (
    <div className={scss.inputContainer}>
      <label htmlFor={inputId} className={scss.label}>
        {label}
      </label>
      <input id={inputId} className={scss.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
