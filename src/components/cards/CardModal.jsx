import React from "react";
import { createPortal } from "react-dom";
import UsageSummary from "../chart/UsageSummary";

const CardModal = ({ card, onClose }) => {
  if (!card) return null;

  const modalContent = (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "90%",
          maxWidth: "380px",
          backgroundColor: "#F5F6F8",
          borderRadius: "24px",
          padding: "20px",
          position: "relative",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          animation: "fadeIn 0.2s ease-out",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            fontSize: "20px",
            color: "#999",
            padding: "5px",
          }}
        >
          ✕
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
            padding: "0 4px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "26px",
              borderRadius: "4px",
              backgroundColor: card.color,
              border: card.border ? "1px solid #ddd" : "none",
            }}
          ></div>
          <div style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            {card.name}
          </div>
        </div>

        {/* 변경된 부분: benefits 배열 전달 */}
        <UsageSummary cardName={card.name} benefits={card.benefits} />

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "16px",
            marginTop: "20px",
            backgroundColor: "#333",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "14px",
            fontSize: "16px",
          }}
        >
          닫기
        </button>
      </div>
      <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CardModal;
