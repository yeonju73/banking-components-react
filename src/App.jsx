import React, { useState, useMemo } from "react";
import ContractHeader from "./components/history/ContractHeader";
import ContractBody from "./components/history/ContractBody";
import CardPage from "./components/cards/CardPage";
import CardModal from "./components/cards/CardModal";

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

function App() {
  const [view, setView] = useState("history");
  const [selectedCardId, setSelectedCardId] = useState(null);

  // 1. 거래 내역
  const transactionList = [
    {
      id: 1,
      date: "2026-01-14 13:42:27",
      type: "withdraw",
      description: "스타벅스 강남점",
      mcc: "5814",
      cardName: "KB 노리 체크 카드",
      amount: 12000,
    },
    {
      id: 2,
      date: "2026-01-13 18:30:00",
      type: "withdraw",
      description: "CGV 왕십리",
      mcc: "7832",
      cardName: "신한 나라 사랑 카드",
      amount: 30000,
    },
    {
      id: 3,
      date: "2026-01-12 12:00:00",
      type: "withdraw",
      description: "GS25 행당점",
      mcc: "5411",
      cardName: "KB 노리 체크 카드",
      amount: 5000,
    },
    {
      id: 4,
      date: "2026-01-10 09:00:00",
      type: "withdraw",
      description: "CU 한양대점",
      mcc: "5411",
      cardName: "KB 노리 체크 카드",
      amount: 4500,
    },
    {
      id: 5,
      date: "2026-01-08 19:00:00",
      type: "withdraw",
      description: "메가박스 성수",
      mcc: "7832",
      cardName: "롯데 LIKIT FUN 카드",
      amount: 24000,
    },
    {
      id: 6,
      date: "2026-01-05 08:30:00",
      type: "withdraw",
      description: "블루보틀 성수",
      mcc: "5814",
      cardName: "KB 노리 체크 카드",
      amount: 30000,
    },
    {
      id: 7,
      date: "2026-01-01 14:00:00",
      type: "withdraw",
      description: "이마트 왕십리",
      mcc: "5411",
      cardName: "신한 나라 사랑 카드",
      amount: 100000,
    },
  ];

  // 2. 카드 데이터
  const rawCardData = [
    {
      id: 1,
      name: "KB 노리 체크 카드",
      resetDate: 1,
      color: "#8B6B8E",
      benefitLimits: { cafe: 10000, movie: 7000, store: 5000 },
      benefitRates: { cafe: 0.2, movie: 0.35, store: 0.05 },
    },
    {
      id: 2,
      name: "신한 나라 사랑 카드",
      resetDate: 15,
      color: "#0000FF",
      border: true,
      benefitLimits: { cafe: 6000, movie: 6000, store: 5000 },
      benefitRates: { cafe: 0.05, movie: 0.3, store: 0.2 },
    },
    {
      id: 3,
      name: "롯데 LIKIT FUN 카드",
      resetDate: 25,
      color: "#E56717",
      benefitLimits: { cafe: 10000, movie: 10000, store: 5000 },
      benefitRates: { cafe: 0.2, movie: 0.5, store: 0.05 },
    },
  ];

  // 3. 데이터 가공
  const processedCards = useMemo(() => {
    return rawCardData.map((card) => {
      const resetDateStr = getNextResetDateStr(card.resetDate);

      let cafeEarned = 0;
      let storeEarned = 0;
      let movieEarned = 0;

      const cardTransactions = transactionList.filter(
        (t) => t.cardName === card.name
      );

      cardTransactions.forEach((t) => {
        if (t.type !== "withdraw") return;
        const category = getCategoryByMcc(t.mcc);
        if (!category) return;
        const rate = card.benefitRates[category] || 0;
        const earned = t.amount * rate;
        if (category === "cafe") cafeEarned += earned;
        else if (category === "store") storeEarned += earned;
        else if (category === "movie") movieEarned += earned;
      });

      const {
        cafe: cafeLimit,
        store: storeLimit,
        movie: movieLimit,
      } = card.benefitLimits;
      cafeEarned = Math.min(cafeEarned, cafeLimit);
      storeEarned = Math.min(storeEarned, storeLimit);
      movieEarned = Math.min(movieEarned, movieLimit);

      const benefits = [
        {
          key: "CAFE",
          type: "EARN",
          limit: cafeLimit,
          used: Math.floor(cafeEarned),
          resetAt: resetDateStr,
        },
        {
          key: "CONVENIENCE",
          type: "EARN",
          limit: storeLimit,
          used: Math.floor(storeEarned),
          resetAt: resetDateStr,
        },
        {
          key: "MOVIE",
          type: "EARN",
          limit: movieLimit,
          used: Math.floor(movieEarned),
          resetAt: resetDateStr,
        },
      ];

      const totalUsed = Math.floor(cafeEarned + storeEarned + movieEarned);
      const totalLimit = cafeLimit + storeLimit + movieLimit;
      const dDay = getDDay(card.resetDate);

      return { ...card, benefits, totalUsed, totalLimit, dDay };
    });
  }, [transactionList, rawCardData]);

  const mainCard = processedCards[0];
  const selectedCard = processedCards.find((c) => c.id === selectedCardId);

  const todayTitle = `${
    CURRENT_DATE.getMonth() + 1
  }월 ${CURRENT_DATE.getDate()}일`;

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "#F5F6F8",
      }}
    >
      {view === "history" && (
        <>
          <div onClick={() => setView("cards")} style={{ cursor: "pointer" }}>
            <ContractHeader card={mainCard} dateTitle={todayTitle} />
            <div
              style={{
                textAlign: "center",
                padding: "12px",
                fontSize: "12px",
                color: "#888",
                backgroundColor: "#fff",
                borderTop: "1px solid #f0f0f0",
              }}
            >
              👇 터치하여 전체 카드 보기
            </div>
          </div>
          <ContractBody transactions={transactionList} />
        </>
      )}

      {view === "cards" && (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            minHeight: "100vh",
          }}
        >
          <button
            onClick={() => setView("history")}
            style={{
              marginBottom: "20px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            ← 돌아가기
          </button>
          <CardPage
            cards={processedCards}
            onCardClick={(card) => setSelectedCardId(card.id)}
          />
        </div>
      )}
      {selectedCard && (
        <CardModal
          card={selectedCard}
          onClose={() => setSelectedCardId(null)}
        />
      )}
    </div>
  );
}

export default App;
