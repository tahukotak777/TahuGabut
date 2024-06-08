"use client"

import Card from "@/components/Card";
import BgHome1 from "@/components/background/BgHome1";
import Image from "next/image";
import { useRef } from "react";

const Page = () => {
  const refMenu = useRef(null)
  const srcollMenu = () => {
    if (refMenu.current) {
      refMenu.current.scrollIntoView({ behavior: "smooth"})
    }
  }
  

  return (
    <main className="overflow-x-hidden font-[arial]">
      <section className="w-screen h-screen p-4 pt-12 text-main-fourth text-center flex flex-col justify-center items-center">
        <BgHome1 />
        <h1 className="text-4xl font-bold mb-4">TEMPAT ANDA MELEPAS RASA BOSAN ANDA</h1>
        <button className="bg-main-third p-4 rounded-3xl font-bold text-3xl mb-2" onClick={() => srcollMenu()}>
          Dengan berbagai menu
        </button>
        <p className="text-lg">web yang dapat melepas kebosanan anda dengan berbagai menu yang ada di sini.</p>
      </section>
      <section className="w-screen h-screen p-4 pt-12 flex flex-col-reverse md:flex-row justify-evenly items-center self-start">
        <div className="md:w-5/12 w-full md:h-48 h-60 p-4 border-2 rounded-3xl overflow-y-auto md:overflow-y-visible shadow-[15px_15px_10px_2px_rgb(0,0,0,0.5)]">
          <h1 className="font-bold mb-4">
            TAHUGABUT
          </h1>
          <p className="font-semibold">
            Ini adalah sebuah web yang dikembangkan oleh developer sebagai bahan
            belajar. Dan web ini akan terus berkembang selama sang developer
            tidak malas. Jika ada saran dan masukan silahkan hubungi developer
            karena hal itu sangat membantu developer dalam belajar nya.
          </p>
        </div>
        <Image
          src={"/logo/bebek-logo.png"}
          width={500}
          height={500}
          className="md:w-4/12 md:h-4/12 w-4/6"
        />
      </section>
      <section className="p-4 w-full h-screen" ref={refMenu}>
        <h1 className="text-3xl font-bold">
          Berbagai menu
        </h1>
        <div className="mt-4 grid md:grid-cols-4 grid-cols-2 gap-4">
          <Card
            title="calculator"
            description="Tempat anda untuk mendapatkan bantuan saat menghitung hal dasar."
          />
          <Card />
          <Card />
          <div className="">
            <Card />
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default Page;
