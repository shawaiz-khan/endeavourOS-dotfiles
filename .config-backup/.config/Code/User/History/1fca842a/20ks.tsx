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

      {/* English Text Content */}
      <div className="px-5 py-10 text-end text-base md:text-2xl">
        <p>🌟 Urgent Appeal for Donations – Al-Syed Welfare Foundation 🌟
          Your support is a lifeline for those in need. We are working day and night to provide free medical care (hospitals), education, and food to orphans, widows, and the destitute.
          We cannot do this alone. We urgently need your Donations, Zakat, and Sadaqah to keep these services running.
          <br /> <br />
          Payment Details for Donations:
          💸 EasyPaisa & JazzCash: 03224569570 (Sohaib Ahmed)
          🆔 Raast ID: 03224569570 (Sohaib Ahmed)
          🏦 Bank Transfer:
          Bank Name: HBL
          Account Title: SOHAIB AHMED
          Account Number: 09697901689803
          IBAN: PK17HABB0009697901689803
          Branch: Circular Road, Sialkot
          <br /> <br />
          دل کھول کر تعاون کریں اور مزید تفصیلات کے لیے ہمارا واٹس ایپ چینل جوائن کریں:
          👉 <Link href={"https://whatsapp.com/channel/0029VbBU2GxChq6QhY40Uq1q"} className="underline underline-offset-4 text-amber-400">Click Here!</Link></p>
      </div>

      {/* Urdu Text Content */}
      <div className="px-5 py-10 text-end text-base md:text-2xl">
        <p>🌟 عطیات کی پرزور اپیل - السید ویلفیئر فاؤنڈیشن 🌟
          آئیں دکھی انسانیت کا سہارا بنیں! ہم یتیموں، بیواؤں اور نادار افراد کے لیے ہسپتال (علاج)، تعلیم اور کھانے (راشن) کا انتظام کر رہے ہیں۔
          اس نیک مقصد کو جاری رکھنے کے لیے ہمیں آپ کے عطیات، زکوٰۃ اور صدقات کی اشد ضرورت ہے۔ آپ کا دیا ہوا تھوڑا سا سرمایہ کسی کی زندگی بدل سکتا ہے۔
          <br /> <br />
          عطیات بھیجنے کے لیے اکاؤنٹ کی تفصیلات:
          💸 ایزی پیسہ / جاز کیش: 03224569570 (صہیب احمد)
          🆔 راست آئی ڈی: 03224569570 (صہیب احمد)
          🏦 بینک ٹرانسفر:
          بینک: ایچ بی ایل (HBL)
          اکاؤنٹ ٹائٹل: Sohaib Ahmed
          اکاؤنٹ نمبر: 09697901689803
          آئی بی این (IBAN): PK17HABB0009697901689803
          برانچ: سرکلر روڈ، سیالکوٹ
          <br /> <br />
          دل کھول کر تعاون کریں اور مزید تفصیلات کے لیے ہمارا واٹس ایپ چینل جوائن کریں:
          👉 <Link href={"https://whatsapp.com/channel/0029VbBU2GxChq6QhY40Uq1q"} className="underline underline-offset-4 text-amber-400">Click Here!</Link></p>
      </div>

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
