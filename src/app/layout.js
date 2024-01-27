import React from "react";
// import Header from "@/components/Header/Header";
// import ControlPanel from "@/components/ControlPanel/ControlPanel";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barcode scanner",
  description: "Barcode scanner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
