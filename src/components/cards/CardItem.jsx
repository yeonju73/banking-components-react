import React from "react";

const CardItem = ({ card, onClick }) => {
  const { name, color, border, totalUsed, totalLimit, dDay } = card;

  const percentage =
    totalLimit > 0 ? Math.min((totalUsed / totalLimit) * 100, 100) : 0;

  return (
    <div
      onClick={() => onClick(card)}
      style={{
        padding: "20px",
        border: "1px solid #f0f0f0",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "40px",
              height: "26px",
              borderRadius: "4px",
              backgroundColor: color,
              border: border ? "1px solid #ddd" : "none",
            }}
          ></div>
          <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
            {name}
          </span>
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#ff6b6b",
            fontWeight: "bold",
            backgroundColor: "#fff0f0",
            padding: "4px 8px",
            borderRadius: "8px",
          }}
        >
          D-{dDay} 리셋
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "12px", color: "#888" }}>받은 혜택</span>
        <div>
          <span
            style={{ fontSize: "18px", fontWeight: "bold", color: "#4CD9C0" }}
          >
            {totalUsed.toLocaleString()}
          </span>
          <span style={{ fontSize: "12px", color: "#aaa" }}>
            {" "}
            / {totalLimit.toLocaleString()}원
          </span>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          height: "8px",
          backgroundColor: "#eee",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: `${percentage}%`,
            backgroundColor: "#4CD9C0",
            borderRadius: "4px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CardItem;
