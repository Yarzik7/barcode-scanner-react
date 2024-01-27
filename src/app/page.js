"use client";
import App from "@/components/App/App";
import Header from "@/components/Header/Header";
import ControlPanel from "@/components/ControlPanel/ControlPanel";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [deviceId, setDeviceId] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [isStartScann, setIsScannStart] = useState(false);

  const onSetScannDevice = (deviceId, deviceName) => {
    setDeviceId(deviceId);
    setDeviceName(deviceName);
    if (isStartScann) {
      setIsScannStart(false);
    }
  };

  const onToggleStartScann = () => setIsScannStart(!isStartScann);

  return (
    <>
      <Header onSetScannDevice={onSetScannDevice} deviceName={deviceName} />
      <main className={styles.main}>
        <App deviceId={deviceId} isStartScann={isStartScann} />
      </main>
      <ControlPanel setIsScannStart={onToggleStartScann} />
    </>
  );
}
