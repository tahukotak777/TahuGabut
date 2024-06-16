import Image from "next/image";

const BgHome1 = () => {
  return (
    <div className="w-full h-full bg-[#242424] top-0 left-0 absolute -z-30 overflow-hidden object-contain ">
      <Image
        src={"/bg/bg random.jpg"}
        width={1200}
        height={1000}
        className="w-full h-full absolute opacity-15"
      />
      <div className="bg-main-secondery size-1.5x absolute lg:rotate-[110deg] lg:right-[-63%] md:top-[10%] md:right-[-80%] rotate-[41deg] right-[-62%]"></div>
      <div className="bg-main-primary size-1.5x absolute lg:rotate-[110deg] lg:right-[-65%] md:top-[10%] md:right-[-85%] rotate-[41deg] right-[-70%]"></div>
    </div>
  );
};

export default BgHome1;
