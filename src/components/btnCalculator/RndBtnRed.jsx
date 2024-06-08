const RndBtnRed = ({ setVariable, inner}) => {
  return (
    <button
      onClick={() => {
        setVariable((prev) => (prev += inner));
      }}
      className="bg-main-primary rounded-full text-xl font-bold border-2 border-main-third hover:bg-main-third hover:text-main-fourth transition-all duration-150"
    >
      {inner}
    </button>
  );
};

export default RndBtnRed;
