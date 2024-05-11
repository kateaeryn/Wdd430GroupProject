import type { Metadata } from "next";
import "/app/ui/globals.css";
import Head from "next/head";
import React from "react";
import Header from "./ui/components/header.js";
import Footer from "./ui/components/footer.js";
import { quattrocento } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Handcrafted Heaven",
  description:
    "Handcrafted Haven is a place to find unique, handcrafted items.",
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
