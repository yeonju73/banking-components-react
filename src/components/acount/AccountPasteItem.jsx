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
                {/* 은행 정보가 있을 때만 */}
                {bank && (
                    <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                        style={{ backgroundColor: bank.color }}
                    >
                        {bank.code}
                    </div>
                )}

                {/* 은행명 + 계좌 */}
                <div>
                    {/* 은행명 */}
                    {bank && (
                        <div className="text-sm font-medium text-gray-900">
                            {bank.label}
                        </div>
                    )}

                    {/* 계좌번호 */}
                    <div
                        className={`text-sm 'text-gray-500'}`}
                    >
                        {account}
                    </div>
                </div>
            </div>

            {/* 입력힌트 메시지 */}
            <span className="text-xs text-gray-400">
                입력
            </span>
        </button>
    );
};

export default AccountPasteItem;
