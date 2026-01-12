"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-5">
      <h1 className="w-full text-2xl font-bold text-center">
        Website is under maintainance
      </h1>

      <button
        onClick={() => "https://whatsapp.com/channel/0029VbBU2GxChq6QhY40Uq1q"}
        className="bg-green-600 w-full py-3 px-5 font-bold text-neutral-50"
      >
        Join our WhatsApp Channel
      </button>
    </div>
  );
}
