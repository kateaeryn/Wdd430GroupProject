import type { Metadata } from "next";
import "./ui/globals.css"; 
import Head from "next/head";
import React from "react";
import Header from "./ui/components/header.js";
import Footer from "./ui/components/footer.js";
import { quattrocento } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<Head>
				<title>Handcrafted Haven</title>
				<meta
					name="description"
					content="Welcome to the Handcrafted Haven online store"
				/>
			</Head>
      <body className={`${quattrocento.className}`}>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
