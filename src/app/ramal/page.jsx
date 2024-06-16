"use client";

import { useState } from "react";

const page = () => {
  const [dataRamalan, setDataRamalan] = useState("");
  const [ramal, setRamal] = useState(false);

  const handlerPickRamalan = async () => {
    const response = await fetch("https://tahuapi.vercel.app/ramal");
    const data = await response.json();
    setDataRamalan(data);
    setRamal(true);
  };

  const handlerResetRamalan = () => {
    setDataRamalan('')
    setRamal(false)
  }

  return (
    <main className="w-full h-screen mt-8 p-4 py-12 flex justify-center items-center">
      {ramal ? (
        <div className="flex flex-col items-center lg:max-w-[90vh] text-center">
          <div className="flex flex-col items-center border-2 rounded-lg p-4 w-full shadow-[10px_10px_10px_0px_rgb(0,0,0,0.5)]">
            <h1 className="text-xl font-bold mb-2">Ramalan</h1>
            <p className="font-bold">{dataRamalan.ramalan_hari_ini}</p>
          </div>
          <div className="flex mt-4">
            <div className="mr-2 flex flex-col items-center border-2 rounded-lg p-4 w-1/2 shadow-[10px_10px_10px_0px_rgb(0,0,0,0.5)]">
              <h1 className="text-xl font-bold mb-2">Saran</h1>
              <p className="font-bold">{dataRamalan.saran}</p>
            </div>
            <div className="ml-2 flex flex-col items-center border-2 rounded-lg p-4 w-1/2 shadow-[10px_10px_10px_0px_rgb(0,0,0,0.5)]">
              <h1 className="text-xl font-bold mb-2">Larangan</h1>
              <p className="font-bold">{dataRamalan.larangan}</p>
            </div>
          </div>
          <button className="bg-main-primary border-2 rounded-lg mt-4 p-2 font-bold hover:bg-main-third hover:text-main-fourth hover:scale-110 transition-all duration-200" onClick={() => handlerResetRamalan()}>ambil ramalan lain</button>
        </div>
      ) : (
        <div className="border-2 p-4 rounded-lg shadow-[10px_10px_10px_0px_rgb(0,0,0,0.5)] flex items-center flex-col">
          <h1 className="text-xl font-bold mb-4">Cek Ramalan</h1>
          <button
            className="p-4 bg-main-primary border-2 rounded-lg font-bold hover:bg-main-third hover:text-main-fourth hover:scale-110 transition-all duration-200"
            onClick={() => handlerPickRamalan()}
          >
            ambil ramalan
          </button>
        </div>
      )}
    </main>
  );
};

export default page;
