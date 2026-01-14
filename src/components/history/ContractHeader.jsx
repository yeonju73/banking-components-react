import React from "react";
import UsageSummary from "../chart/UsageSummary";

const ContractHeader = ({ card, dateTitle }) => {
  const title = dateTitle ? `${dateTitle} 혜택 현황` : "혜택 현황";

  return (
    <div style={{ padding: "24px 20px 10px", backgroundColor: "#fff" }}>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        소비 내역
      </h1>

      <UsageSummary
        cardName={card.name}
        benefits={card.benefits}
        title={title}
      />
    </div>
  );
};

export default ContractHeader;
