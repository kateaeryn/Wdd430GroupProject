import React from "react";
import logo from "/public/images/title-logo.png";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
 
  return (
    <header className="flex flex-col space-y-2 bg-tan ">
      <div className="flex flex-col sm:flex-row  justify-between">
        <div className=" relative flex justify-center">
          <a href="/">
            <Image
              className="w-full"
              width="1562"
              height="1562"
              src={logo.src}
              alt="Logo"
            />
          </a>
        </div>
        <div className="hidden sm:flex justify-evenly grow flex-wrap flex-row ">
        <NavLinks />
      </div>
        <div className="flex flex-row justify-evenly self-center mr-8 space-x-6">
          <Link href="/dashboard/account/">
            <UserCircleIcon className=" w-[50px] h-[50px] mb-4 stroke-brown lg:w-[75px] lg:h-[75px]" />
          </Link>
          <Link href="/dashboard/cart">
            <ShoppingCartIcon className="w-[50px] h-[50px] mb-4 stroke-brown lg:w-[75px] lg:h-[75px]" />
          </Link>
        </div>
      </div>

      {/* Navigation links */}
      <div className="sm:hidden flex justify-evenly grow flex-wrap flex-row ">
        <NavLinks />
      </div>
    </header>
  );
}
