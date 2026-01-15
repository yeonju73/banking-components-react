import React, { useState, useMemo } from "react";
import ContractHeader from "./components/history/ContractHeader";
import ContractBody from "./components/history/ContractBody";
import CardPage from "./components/cards/CardPage";
import CardModal from "./components/cards/CardModal";
import { banks } from "./data/banks";
import { useAccountFormState } from "./hooks/useAccountFormState";
import AccountForm from "./components/AccountForm";
import { CardChart } from "./components/CardChart";

const CURRENT_DATE = new Date("2026-01-14");

const getCategoryByMcc = (mcc) => {
  switch (mcc) {
    case "5814":
      return "cafe";
    case "5411":
      return "store";
    case "5541":
      return "store";
    case "7832":
      return "movie";
    default:
      return null;
  }
};

const getNextResetDateStr = (resetDay) => {
  const currentDay = CURRENT_DATE.getDate();
  let targetYear = CURRENT_DATE.getFullYear();
  let targetMonth = CURRENT_DATE.getMonth();

  if (currentDay >= resetDay) {
    targetMonth += 1;
  }
  if (targetMonth > 11) {
    targetYear += 1;
    targetMonth = 0;
  }
  const d = new Date(targetYear, targetMonth, resetDay);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;
};

const getDDay = (resetDay) => {
  const currentDay = CURRENT_DATE.getDate();
  if (currentDay < resetDay) return resetDay - currentDay;

  const endOfMonth = new Date(
    CURRENT_DATE.getFullYear(),
    CURRENT_DATE.getMonth() + 1,
    0
  ).getDate();
  return endOfMonth - currentDay + resetDay;
};
const dummyData = {
    title: "KB 노리 체크 카드",
    resetDate: "2026-02-01",
    benefits: [
      { id: 1, type: "카페", icon: ":커피:", limit: 2000, used: 100 },
      { id: 2, type: "편의점", icon: ":편의점:", limit: 3000, used: 375 },
      { id: 3, type: "영화관", icon: ":클래퍼:", limit: 7000, used: 100 }
    ]
  };

  
function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <CardChart data={dummyData} />
    </div>
  );
}


export default App;
