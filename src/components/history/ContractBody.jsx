import React from "react";

const ContractBody = ({ transactions }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "0 20px 40px",
        minHeight: "500px",
      }}
    >
      <div
        style={{
          height: "10px",
          backgroundColor: "#F5F6F8",
          margin: "0 -20px 20px",
        }}
      ></div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {transactions.map((t) => {
          const dateObj = new Date(t.date);
          const formattedDate = `${String(dateObj.getMonth() + 1).padStart(
            2,
            "0"
          )}.${String(dateObj.getDate()).padStart(2, "0")}`;

          const isDeposit = t.type === "deposit";
          const typeText = isDeposit ? "입금" : "출금";
          const typeColor = isDeposit ? "#F04452" : "#4a90e2";
          const amountPrefix = isDeposit ? "+" : "";

          return (
            <div
              key={t.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#aaa",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>{formattedDate}</span>
                  <div
                    style={{
                      width: "1px",
                      height: "10px",
                      background: "#e0e0e0",
                    }}
                  ></div>
                  <span>{t.cardName}</span>
                </div>
                <span
                  style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}
                >
                  {t.description}
                </span>
              </div>

              <div style={{ textAlign: "right" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "11px",
                    color: typeColor,
                    marginBottom: "3px",
                  }}
                >
                  {typeText}
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {amountPrefix}
                  {t.amount.toLocaleString()}원
                </span>
              </div>
            </div>
          );
        })}

        {transactions.length === 0 && (
          <div
            style={{ textAlign: "center", padding: "40px 0", color: "#aaa" }}
          >
            거래 내역이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractBody;
