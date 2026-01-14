const BankItem = ({ label, code, color, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex-1 rounded-xl px-3 py-2
        flex items-center gap-2 text-left
        bg-gray-100
        transition-all duration-150 ease-out
        hover:bg-gray-200 hover:-translate-y-[1px] hover:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-black
        active:translate-y-0 active:shadow-none
      "
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg text-white font-bold text-sm"
        style={{ backgroundColor: color }}
      >
        {code}
      </span>

      <span className="text-sm font-medium">
        {label}
      </span>
    </button>
  );
};

export default BankItem;
