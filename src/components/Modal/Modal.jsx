"use client";

import ModalBackdrop from "./ModalBackdrop/ModalBackdrop";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import scss from "./Modal.module.scss";

const Modal = ({ onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const modalRoot = document.getElementById("modal-root");

  return createPortal(
    <div className={scss.modal}>
      <ModalBackdrop onClose={onClose}>{children}</ModalBackdrop>
    </div>,
    modalRoot
  );
};

export default Modal;
