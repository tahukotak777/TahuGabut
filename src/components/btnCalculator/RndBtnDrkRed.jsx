const RdnBtnDrkRed = ({ setVariable, inner}) => {
  return (
    <button
      onClick={() => {
        setVariable((prev) => (prev += inner));
      }}
      className="bg-main-secondery rounded-full text-xl font-bold border-2 border-main-third hover:text-main-fourth hover:bg-main-third transition-all duration-150"
    >
      {inner}
    </button>
  );
};

export default RdnBtnDrkRed;
