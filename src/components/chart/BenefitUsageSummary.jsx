import React from "react";
import Row from "./Row";

const BenefitUsageSummary = ({ cardName, benefits, onSelect, title }) => {
  const categoryConfig = {
    CAFE: { label: '카페', icon: '☕' },
    CONVENIENCE: { label: '편의점', icon: '🏪' },
    MOVIE: { label: '영화관', icon: '🎬' },
  };

  const resetDateStr = benefits && benefits.length > 0 ? benefits[0].resetAt : '';

  // 전달받은 title이 없으면 기본값 사용
  const displayTitle = title || "혜택 현황";

  return (
    <div style={{
      width: "100%", backgroundColor: "#fff", borderRadius: "14px",
      padding: "14px 14px 6px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)", marginBottom: "10px"
    }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "0 2px 10px" }}>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'baseline' }}>
          {/* [변경] 동적 타이틀 출력 */}
          <span style={{ fontSize: "14px", fontWeight: "800", color: "#111" }}>
            {displayTitle}
          </span>
        </div>

        <div style={{ fontSize: "12px", color: "#888", fontWeight: "500" }}>
          리셋: {resetDateStr}
        </div>
      </div>

      {benefits.map((benefit) => {
        if (!benefit.limit || benefit.limit <= 0) return null;
        const config = categoryConfig[benefit.key] || { label: benefit.key, icon: '❓' };
        return (
          <Row
            key={benefit.key}
            icon={config.icon}
            label={config.label}
            data={benefit}
            onClick={() => onSelect && onSelect(benefit.key)}
          />
        );
      })}
    </div>
  );
};

export default BenefitUsageSummary;