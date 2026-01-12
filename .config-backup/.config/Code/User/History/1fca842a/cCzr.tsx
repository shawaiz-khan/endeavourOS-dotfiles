"use client";

import logo from "@/assets/images/sayed-foundation-logo.jpeg";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-start items-start flex-col">

      <nav className="flex justify-center items-center w-full gap-5 border-b border-amber-400 p-5">
        <Image src={logo} alt="Logo" className="max-w-20" />
        <h1 className="font-bold text-xl">Al Sayed Welfare Foundation</h1>
      </nav>

      <h1 className="bg-red-500 p-5 w-full text-2xl md:text-5xl font-bold text-white text-center">
        Website is under maintainance
      </h1>

      <Link
        href={"https://whatsapp.com/channel/0029VbBU2GxChq6QhY40Uq1q"}
        className="bg-green-600 py-3 md:text-3xl px-5 font-bold text-neutral-50 w-fit"
      >
        Join our WhatsApp Channel
      </Link>
    </div>
  );
}
