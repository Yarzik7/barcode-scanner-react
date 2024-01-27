"use client";

import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import scss from "./Header.module.scss";

const Header = ({ deviceName, onSetScannDevice }) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => setShowModal(!showModal);

  return (
    <header className={scss.header}>
      <Container className={scss.headerContainer}>
        <Button onClick={onToggleModal}>
          <Icon iconName="menu" />
        </Button>
        <Heading
          type="h1"
          content="Barcode scanner"
          props={{ className: scss.heading }}
        />
      </Container>
      {showModal && (
        <Modal onClose={onToggleModal}>
          <SideBar
            onSetScannDevice={onSetScannDevice}
            deviceName={deviceName}
          />
        </Modal>
      )}
    </header>
  );
};

export default Header;
