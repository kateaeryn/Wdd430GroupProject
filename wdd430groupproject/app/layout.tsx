import type { Metadata } from "next";
<<<<<<< HEAD
import "/app/ui/globals.css";
=======
import '@/app/ui/globals.css';
>>>>>>> 6dec4fb4305712cafe0b5611fff3fdaaee19aa52
import Head from "next/head";
import React from "react";
import Header from "./ui/components/header.js";
import Footer from "./ui/components/footer.js";
import { quattrocento } from "@/app/ui/fonts";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Handcrafted Heaven",
  description:
    "Handcrafted Haven is a place to find unique, handcrafted items.",
=======
  title: "Handcrafted Haven",
  description: "Handmade arts and crafts",
>>>>>>> 6dec4fb4305712cafe0b5611fff3fdaaee19aa52
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <Head>
        <title>Handcrafted Haven</title>
        <meta
          name="description"
          content="Welcome to the Handcrafted Haven online store"
        />
      </Head>
=======
			<Head>
				<title>Handcrafted Haven</title>
				<meta
					name="description"
					content="Welcome to the Handcrafted Haven online store"
        />
        
			</Head>
>>>>>>> 6dec4fb4305712cafe0b5611fff3fdaaee19aa52
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
