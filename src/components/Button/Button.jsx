import scss from "./Button.module.scss";

const Button = ({ onClick, children }) => {
  return (
    <button className={scss.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
