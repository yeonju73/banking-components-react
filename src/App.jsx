import React from "react";
import BenefitUsageSummary from "./components/chart/BenefitUsageSummary";

const App = () => {
  return (
    <div style={{ padding: "24px", maxWidth: "520px", margin: "0 auto" }}>
      <BenefitUsageSummary
        cardName="우리카드"
        benefits={[
          {
            key: "CAFE",
            type: "EARN",
            limit: 70000,
            used: 30000,
            resetAt: "2026-02-01",
          },
          {
            key: "CONVENIENCE",
            type: "EARN",
            limit: 30000,
            used: 4200,
            resetAt: "2026-02-28",
          },
          {
            key: "MOVIE",
            type: "EARN",
            limit: 50000,
            used: 37000,
            resetAt: "2026-03-01",
          },
        ]}
        onSelect={(key) => {
          console.log("클릭한 혜택:", key);
        }}
      />
    </div>
  );
};

export default App;
