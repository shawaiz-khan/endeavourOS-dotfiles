"use client";

import logo from "@/assets/images/sayed-foundation-logo.jpeg";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-start items-start flex-col">

      {/* Navbar */}
      <nav className="flex justify-center items-center w-full gap-5 p-5">
        <Image src={logo} alt="Logo" className="max-w-20" />
        <h1 className="font-bold text-xl">Al Sayed Welfare Foundation</h1>
      </nav>

      {/* Under Maintainance */}
      <h1 className="bg-neutral-50 p-5 w-full text-md font-bold text-red-600 text-center border border-red-600">
        Website is under maintainance
      </h1>




      {/* Channel Link */}
      <Link
        href={"https://whatsapp.com/channel/0029VbBU2GxChq6QhY40Uq1q"}
        className="bg-green-600 py-3 text-xs px-5 font-bold text-neutral-50 w-fit fixed bottom-3 right-3"
      >
        Join our WhatsApp Channel
      </Link>
    </div>
  );
}
