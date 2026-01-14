import React from "react";
import Row from "./Row";

const BenefitUsageSummary = ({ cardName, benefits, onSelect }) => {
  const cafe = benefits.find((b) => b.key === "CAFE");
  const convenience = benefits.find((b) => b.key === "CONVENIENCE");
  const movie = benefits.find((b) => b.key === "MOVIE");

  return (
    <div className="w-full rounded-[14px] bg-white px-[14px] pt-[14px] pb-[6px] shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
      <div className="flex items-baseline justify-between px-[2px] pb-[10px]">
        <div className="text-[14px] font-extrabold text-[#111]">카테고리</div>
        <div className="text-[12px] text-[#666]">{cardName}</div>
      </div>

      <Row
        icon="☕"
        label="카페"
        data={cafe}
        onClick={() => onSelect("CAFE")}
      />
      <Row
        icon="🏪"
        label="편의점"
        data={convenience}
        onClick={() => onSelect("CONVENIENCE")}
      />
      <Row
        icon="🎬"
        label="영화관"
        data={movie}
        onClick={() => onSelect("MOVIE")}
      />
    </div>
  );
};

export default BenefitUsageSummary;
