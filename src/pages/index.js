import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <Link rel="icon" href="/favicon/favicon.ico" />
        <title>فروشگاه گل و گیاه | Florist</title>
        <meta name="description" content="فروشگاه اینترنتی انواع گل و گیاه آپارتمانی و زینتی" />
      </Head>

      <div className="bg-slate-400 h-52">

      </div>
    </>
  );
}
