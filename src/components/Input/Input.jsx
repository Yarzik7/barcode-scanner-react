import { useId } from 'react';
import scss from './Input.module.scss';

const Input = ({ label = 'label', placeholder = 'input', name = 'input', onChange }) => {
  const inputId = useId();

  return (
    <div className={scss.inputContainer}>
      <label htmlFor={inputId} className={scss.label}>
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        className={scss.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
