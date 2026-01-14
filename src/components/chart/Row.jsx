import React from "react";

const Row = ({ icon, label, data, onClick }) => {
  const { type, limit, used, resetAt } = data;

  const percent = Math.min((used / limit) * 100, 100);
  const remaining = Math.max(limit - used, 0);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer border-t border-[#f1f2f4] px-[10px] py-[12px] text-left hover:bg-[#fafafa]"
    >
      <div className="flex items-center justify-between gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[34px] w-[34px] select-none items-center justify-center rounded-[10px] text-[18px]">
            {icon}
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="text-[14px] font-extrabold text-[#111]">
              {label}
            </div>

            {type === "EARN" && (
              <div className="whitespace-nowrap rounded-[999px] border border-[rgba(56,190,110,0.18)] bg-[rgba(56,190,110,0.12)] px-[8px] py-[3px] text-[11px] leading-none text-[#2b6a3b]">
                적립
              </div>
            )}
          </div>
        </div>

        <div className="shrink-0 text-right">
          <div className="text-[13px] font-black text-[#111]">
            {formatKRW(remaining)}
          </div>
          <div className="mt-[1px] text-[10px] text-[#777]">남은 한도</div>
        </div>
      </div>

      <div className="mt-[8px] h-[8px] w-full overflow-hidden rounded-[999px] bg-[#f2f4f7]">
        <div
          className="h-full rounded-[999px] bg-[#ff8c7a]"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-[6px] flex items-center justify-between gap-[10px]">
        <div className="min-w-0 text-[12px] text-[#111] whitespace-normal">
          <b>{formatKRW(used)}</b> / {formatKRW(limit)}
        </div>

        <div className="ml-[8px] shrink-0 text-[11px] text-[#888] whitespace-nowrap">
          리셋: {resetAt}
        </div>
      </div>
    </div>
  );
};

function formatKRW(num) {
  return num.toLocaleString("ko-KR") + "원";
}

export default Row;
