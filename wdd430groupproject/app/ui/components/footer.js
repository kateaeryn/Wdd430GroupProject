import React from "react";
<<<<<<< HEAD
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
=======


export default function Footer() {
	return (
		<footer
			className="flex flex-row justify-between  bg-tan p-1">
			<a href="/" className="text-brown text-xl">
				Contact Us
			</a>
			<p className="text-xl text-brown">&copy; 2024 Handcrafted Haven</p>
		</footer>
	);
>>>>>>> 6dec4fb4305712cafe0b5611fff3fdaaee19aa52
}
