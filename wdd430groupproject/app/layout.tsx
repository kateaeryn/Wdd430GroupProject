'use client';

import "@/app/ui/globals.css";
import Head from "next/head";
import React from "react";
import Header from "./ui/components/header.js";
import Footer from "./ui/components/footer.js";
import { quattrocento } from "@/app/ui/fonts";
import { AuthProvider } from './lib/authContext';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <Head>
          <meta name="Handcrafted Haven"
            content="Welcome to the Handcrafted Haven online store"
          />
          <meta property="og:title" content="Handcrafted Haven"/>
          <title>Handcrafted Haven</title> 

       </Head>
        
        <body className={`${quattrocento.className}`}>
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
