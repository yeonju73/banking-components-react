const AccountPasteItem = ({ bank, account }) => {
  return (
    <button
      type="button"
      className="
        flex w-full items-center justify-between
        rounded-xl bg-gray-100 px-4 py-3
        text-left text-sm
        transition
        hover:bg-gray-200
        active:scale-[0.98]
      "
    >
      <div className="flex items-center gap-3">
        {/* 은행 로고 */}
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
          style={{ backgroundColor: bank.color }}
        >
          {bank.code}
        </div>

        {/* 은행명 + 계좌 */}
        <div>
          <div className="text-gray-900 font-medium">
            {bank.label}
          </div>
          <div className="text-xs text-gray-500">
            {account}
          </div>
        </div>
      </div>

      {/* 입력될 것 같은 힌트 */}
      <span className="text-xs text-gray-400">
        입력
      </span>
    </button>
  );
};

export default AccountPasteItem;
