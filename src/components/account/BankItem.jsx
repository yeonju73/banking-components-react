const BankItem = ({ label, code, color, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        rounded-xl px-3 py-2
        flex items-center gap-2 text-left
        bg-gray-100
        transition-all duration-150 ease-out
        hover:bg-gray-200 hover:-translate-y-[1px] hover:shadow-sm
        focus-visible:ring-2 focus-visible:rnoneing-gray-400
        active:scale-[0.98]
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
