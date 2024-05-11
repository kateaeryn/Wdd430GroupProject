import React from "react";
import logo from "/public/images/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D9BCA3",
        padding: "10px",
      }}
    >
      {/* Logo */}
      <a href="/">
        <Image src={logo.src} alt="Logo" width={75} height={75} />
      </a>

      <p>&copy; 2024 Handcrafted Haven</p>
    </footer>
  );
}
