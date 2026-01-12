"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-5 md:p-24 gap-5">
      <h1 className="w-full text-2xl md:text-5xl font-bold text-center">
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
