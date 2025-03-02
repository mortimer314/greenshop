import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import Landing from "@/components/templates/index/landing/Landing";
import Services from "@/components/templates/index/services/Services";
import Banner from "@/components/templates/index/banner/Banner";
import HousePlanet from "@/components/templates/index/housePlanet/HousePlanet";
import TopProducts from "@/components/templates/index/topProducts/TopProducts";
import PhytosanitaryServices from "@/components/templates/index/phytosanitaryServices/PhytosanitaryServices";
import OrnamentalPlants from "@/components/templates/index/ornamentalPlants/OrnamentalPlants";
import TopOrnamentalPlants from "@/components/templates/index/topOrnamentalPlants/TopOrnamentalPlants";
import GiftPlants from "@/components/templates/index/giftPlants/GiftPlants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <Link rel="icon" href="/favicon/favicon.ico" />
        <title>فروشگاه گل و گیاه | Green Shop</title>
        <meta name="description" content="فروشگاه اینترنتی انواع گل و گیاه آپارتمانی و زینتی" />
      </Head>

      <div className="">
        {/* <div>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'حالت روشن' : 'حالت دارک'}
          </button>
          <h1 className="text-2xl">سلام دنیا!</h1>
          <p>این متن در حالت {darkMode ? 'دارک' : 'روشن'} است.</p>
        </div> */}

        <Navbar />
        <Landing />
        <Services />
        <Banner />
        <HousePlanet />
        <TopProducts />
        <PhytosanitaryServices/>
        <OrnamentalPlants/>
        <TopOrnamentalPlants />
        <GiftPlants/>
        <Footer />
      </div>
    </>
  );
}
