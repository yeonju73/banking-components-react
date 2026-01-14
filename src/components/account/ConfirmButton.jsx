const ConfirmButton = ({ enabled, onClick }) => {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0
        flex justify-center
        bg-white border-t
      "
    >
      <div className="w-full max-w-[430px] px-4 py-3">
        <button
          type="button"
          disabled={!enabled}
          onClick={onClick}
          className={`
            w-full rounded-xl py-3 text-base font-semibold
            transition-all duration-150
            ${
              enabled
                ? 'bg-[#0085CC] text-white active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default ConfirmButton;
