import React from "react";

const Row = ({ icon, label, data, onClick }) => {
  // resetAt 제거
  const { type, limit, used } = data;

  const percent = limit > 0 ? Math.min((used / limit) * 100, 100) : 0;
  const remaining = Math.max(limit - used, 0);

  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderTop: "1px solid #f1f2f4",
        padding: "12px 10px",
        textAlign: "left",
        transition: "background-color 0.2s",
      }}
    >
      {/* 상단: 아이콘, 라벨, 남은 금액 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "34px", height: "34px", borderRadius: "10px",
            fontSize: "18px", backgroundColor: "#f9f9f9"
          }}>
            {icon}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ fontSize: "14px", fontWeight: "800", color: "#111" }}>
              {label}
            </div>
            {/* 적립 뱃지 (필요시 사용) */}
            {type === "EARN" && (
              <div style={{
                borderRadius: "999px",
                border: "1px solid rgba(56,190,110,0.18)",
                backgroundColor: "rgba(56,190,110,0.12)",
                padding: "3px 8px", fontSize: "11px", lineHeight: "1",
                color: "#2b6a3b", whiteSpace: "nowrap"
              }}>
                적립
              </div>
            )}
          </div>
        </div>

        <div style={{ flexShrink: 0, textAlign: "right" }}>
          <div style={{ fontSize: "13px", fontWeight: "900", color: "#111" }}>
            {formatKRW(remaining)}
          </div>
          <div style={{ marginTop: "1px", fontSize: "10px", color: "#777" }}>남은 한도</div>
        </div>
      </div>

      {/* 중단: 프로그레스 바 */}
      <div style={{
        marginTop: "8px", width: "100%", height: "8px",
        overflow: "hidden", borderRadius: "999px",
        backgroundColor: "#f2f4f7"
      }}>
        <div style={{
          height: "100%", borderRadius: "999px",
          backgroundColor: "#ff8c7a",
          width: `${percent}%`,
          transition: "width 0.3s ease-out"
        }} />
      </div>

      {/* 하단: 사용 금액 (리셋 날짜 삭제됨) */}
      <div style={{ marginTop: "6px" }}>
        <div style={{ fontSize: "12px", color: "#111", wordBreak: "keep-all" }}>
          <b style={{ fontWeight: "bold" }}>{formatKRW(used)}</b> / {formatKRW(limit)}
        </div>
      </div>
    </div>
  );
};

function formatKRW(num) {
  return num.toLocaleString("ko-KR") + "원";
}

export default Row;