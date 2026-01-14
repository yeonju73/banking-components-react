import React from "react";
import BenefitUsageSummary from "./components/chart/BenefitUsageSummary";

// 편의점은 5411/5541 혼재
// 영화관은 7832
// 카페는 5814

const App = () => {
  const transactionList = [
    {
      id: 1,
      date: "2026-01-14 13:42:27",
      type: "withdraw",
      description: "스타벅스 강남점",
      mcc: "5814", // cafe
      cardName: "KB 노리 체크 카드",
      amount: 12000,
    },
    {
      id: 2,
      date: "2026-01-13 18:30:00",
      type: "withdraw",
      description: "CGV 왕십리",
      mcc: "7832", // movie
      cardName: "신한 나라 사랑 카드",
      amount: 30000,
    },
    {
      id: 3,
      date: "2026-01-12 12:00:00",
      type: "withdraw",
      description: "GS25 행당점",
      mcc: "5411", // store
      cardName: "KB 노리 체크 카드",
      amount: 5000,
    },
    {
      id: 4,
      date: "2026-01-10 09:00:00",
      type: "withdraw",
      description: "CGV 홍대",
      mcc: "7832", // movie
      cardName: "KB 노리 체크 카드",
      amount: 4500,
    },
    {
      id: 5,
      date: "2026-01-08 19:00:00",
      type: "withdraw",
      description: "메가박스 성수",
      mcc: "7832", // movie
      cardName: "롯데 LIKIT FUN 카드",
      amount: 24000,
    },
    {
      id: 6,
      date: "2026-01-05 08:30:00",
      type: "withdraw",
      description: "블루보틀 성수",
      mcc: "5814", // cafe
      cardName: "KB 노리 체크 카드",
      amount: 30000,
    },
    {
      id: 7,
      date: "2026-01-01 14:00:00",
      type: "withdraw",
      description: "이마트 왕십리",
      mcc: "5411", // store
      cardName: "신한 나라 사랑 카드",
      amount: 100000,
    },
  ];

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

  const selectedCardName = "KB 노리 체크 카드";
  const selectedCard = rawCardData.find((c) => c.name === selectedCardName);

  function getCategoryByMcc(mcc) {
    if (mcc === "5814") return "cafe";
    if (mcc === "5411") return "store";
    if (mcc === "7832") return "movie";
    return null;
  }

  let cafeEarned = 0;
  let storeEarned = 0;
  let movieEarned = 0;

  transactionList.forEach((t) => {
    if (t.cardName !== selectedCardName) return;

    const category = getCategoryByMcc(t.mcc);
    if (!category) return;

    const rate = selectedCard.benefitRates[category];
    const earned = t.amount * rate;

    if (category === "cafe") cafeEarned += earned;
    if (category === "store") storeEarned += earned;
    if (category === "movie") movieEarned += earned;
  });

  const cafeLimit = selectedCard.benefitLimits.cafe;
  const storeLimit = selectedCard.benefitLimits.store;
  const movieLimit = selectedCard.benefitLimits.movie;

  cafeEarned = Math.min(cafeEarned, cafeLimit);
  storeEarned = Math.min(storeEarned, storeLimit);
  movieEarned = Math.min(movieEarned, movieLimit);

  const benefits = [
    {
      key: "CAFE",
      type: "EARN",
      limit: cafeLimit,
      used: Math.floor(cafeEarned),
      resetAt: "2026-02-01",
    },
    {
      key: "CONVENIENCE",
      type: "EARN",
      limit: storeLimit,
      used: Math.floor(storeEarned),
      resetAt: "2026-02-01",
    },
    {
      key: "MOVIE",
      type: "EARN",
      limit: movieLimit,
      used: Math.floor(movieEarned),
      resetAt: "2026-02-01",
    },
  ];

  return (
    <div style={{ padding: "24px", maxWidth: "520px", margin: "0 auto" }}>
      <BenefitUsageSummary
        cardName={selectedCardName}
        benefits={benefits}
        onSelect={(key) => console.log("클릭한 혜택:", key)}
      />
    </div>
  );
};

export default App;
