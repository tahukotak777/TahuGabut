"use client";

import RndBtnDrkRed from "@/components/btnCalculator/RndBtnDrkRed";
import RndBtnRed from "@/components/btnCalculator/RndBtnRed";
import { useState } from "react";

const page = () => {
  const [display, setDisplay] = useState("");

  return (
    <main className="w-full h-screen overflow-x-hidden flex justify-center items-center p-4">
      <section className="border-2 lg:w-2/6 md:w-7/12 w-full lg:h-4/5 md:h-3/5 h-4/6 mt-4 p-4 rounded-lg shadow-[15px_20px_10px_2px_rgb(0,0,0,0.4)]">
        <div className="bg-main-fourth w-full h-16 pl-2 flex items-center rounded-lg border-2 border-main-third text-main-third font-bold text-lg">
          {display}
        </div>
        <div className="flex w-full h-4/5 mt-6 gap-4">
          <div className="grid grid-cols-3 grid-rows-5 w-3/4 gap-4">
            <RndBtnRed inner="1" setVariable={setDisplay} />
            <RndBtnRed inner="2" setVariable={setDisplay} />
            <RndBtnRed inner="3" setVariable={setDisplay} />
            <RndBtnRed inner="4" setVariable={setDisplay} />
            <RndBtnRed inner="5" setVariable={setDisplay} />
            <RndBtnRed inner="6" setVariable={setDisplay} />
            <RndBtnRed inner="7" setVariable={setDisplay} />
            <RndBtnRed inner="8" setVariable={setDisplay} />
            <RndBtnRed inner="9" setVariable={setDisplay} />
            <RndBtnRed inner="0" setVariable={setDisplay} />
            <RndBtnRed inner="00" setVariable={setDisplay} />
            <RndBtnRed inner="." setVariable={setDisplay} />
            <button
              onClick={() => {
                const asigment = () => {
                    try {
                        return eval(display)
                    } catch (error) {
                        return "error"
                    }
                };
                setDisplay(asigment);
              }}
              className="col-span-3 bg-side-second rounded-full text-xl font-bold border-2 border-main-third hover:text-main-fourth hover:bg-main-third transition-all duration-150"
            >
              =
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 w-1/4">
            <button
              onClick={() => {
                setDisplay("");
              }}
              className="bg-main-secondery rounded-full text-xl font-bold border-2 border-main-third hover:text-main-fourth hover:bg-main-third transition-all duration-150"
            >
              c
            </button>
            <RndBtnDrkRed inner="+" setVariable={setDisplay} />
            <RndBtnDrkRed inner="-" setVariable={setDisplay} />
            <RndBtnDrkRed inner="*" setVariable={setDisplay} />
            <RndBtnDrkRed inner="/" setVariable={setDisplay} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
