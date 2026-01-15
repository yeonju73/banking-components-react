import React from "react";
import Row from "./Row";

const UsageSummary = ({ benefits = [], title = "혜택 현황" }) => {
  const categoryConfig = {
    CAFE: { label: "카페", icon: "☕" },
    CONVENIENCE: { label: "편의점", icon: "🏪" },
    MOVIE: { label: "영화관", icon: "🎬" },
  };

  const resetDateStr = benefits.length > 0 ? benefits[0].resetAt : "";

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "14px",
        padding: "14px 14px 6px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          padding: "0 2px 10px",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "800", color: "#111" }}>
          {title}
        </span>
        {resetDateStr && (
          <div style={{ fontSize: "12px", color: "#888", fontWeight: "500" }}>
            리셋: {resetDateStr}
          </div>
        )}
      </div>

      {benefits.map((benefit) => {
        if (!benefit.limit || benefit.limit <= 0) return null;
        const config = categoryConfig[benefit.key] || {
          label: benefit.key,
          icon: "❓",
        };
        return (
          <Row
            key={benefit.key}
            icon={config.icon}
            label={config.label}
            data={benefit}
          />
        );
      })}
    </div>
  );
};

export default UsageSummary;
