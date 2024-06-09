"use client";

import { reqGroqAi } from "@/utils/groq";
import { useState } from "react";
import { Light as SyntaxHightLight } from "react-syntax-highlighter";

const Page = () => {
  const [message, setMessage] = useState();

  const handlerSubmit = async () => {
    const ai = await reqGroqAi(content.value);
    setMessage(ai);
    content.value = ""
  };
  return (
    <main className="w-full min-h-screen flex justify-center items-center p-4 py-12 mt-8">
      <div className="min-h-[80vh] w-[80vh] p-4 border-2 rounded-lg shadow-[20px_20px_10px_0px_rgb(0,0,0,0.5)] flex flex-col items-center max-w-xl mx-auto">
        <h1 className="text-2xl font-bold top-">TahuAI</h1>
        <input
          type="text"
          id="content"
          placeholder="apa yang anda tanyakan..."
          className="border-2 rounded-lg p-2 mt-4 w-full"
        />
        <button
          type="button"
          onClick={() => handlerSubmit()}
          className="bg-main-primary rounded-lg p-2 mt-4 w-full text-xl font-bold hover:bg-main-third hover:text-main-fourth transition-all duration-200"
        >
          kirim
        </button>
        <div className="max-w-xl mt-4">
          <SyntaxHightLight language="swift" wrapLongLines={true}>
            {message}
          </SyntaxHightLight>
        </div>
      </div>
    </main>
  );
};

export default Page;
