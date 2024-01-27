import { useEffect } from "react";
import scss from "./ModalBackdrop.module.scss";

const ModalBackdrop = ({ onClose, children }) => {
  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleCloseByEsc);

    return () => window.removeEventListener("keydown", handleCloseByEsc);
  }, [onClose]);

  const handleCloseByClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={scss.modalBackdrop} onClick={handleCloseByClick}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
