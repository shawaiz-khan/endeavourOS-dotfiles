"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <button
        onClick={() => "https://whatsapp.com/channel/0029VbBU2GxChq6QhY40Uq1q"}
        className="bg-green-600 py-3 px-5 font-bold text-neutral-50"
      >
        Join our WhatsApp Channel
      </button>
      <h1 className="font-bold text-neutral-50 text-2xl lg:text-4xl capitalize text-center bg-red-700"></h1>

      <div>
        <button
          onClick={() => "https://whatsapp.com/channel/0029VbBU2GxChq6QhY40Uq1q"}
          className="bg-green-600 py-3 px-5 font-bold text-neutral-50"
        >
          Join our WhatsApp Channel
        </button>
      </div>
    </div>
  );
}
