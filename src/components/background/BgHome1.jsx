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
      <div className="bg-main-secondery size-1.5x bghome1-elmt2"></div>
      <div className="bg-main-primary size-1.5x bghome1-elmt1"></div>
    </div>
  );
};

export default BgHome1;
