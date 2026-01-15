import React, { useState, useMemo } from 'react';

export default function CardChart({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const { totalLimit, totalUsed } = useMemo(() => {
    if (!data?.benefits) return { totalLimit: 0, totalUsed: 0 };
    return data.benefits.reduce((acc, cur) => ({
      totalLimit: acc.totalLimit + (cur.limit || 0),
      totalUsed: acc.totalUsed + (cur.used || 0),
    }), { totalLimit: 0, totalUsed: 0 });
  }, [data.benefits]);

  const calculateDDay = (targetDate) => {
    if (!targetDate) return "";
    const today = new Date().setHours(0, 0, 0, 0);
    const reset = new Date(targetDate).setHours(0, 0, 0, 0);
    const diffDays = Math.ceil((reset - today) / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? "오늘 리셋" : diffDays < 0 ? "리셋 완료" : `D-${diffDays} 리셋`;
  };

  const getPercent = (used, limit) => (limit > 0 ? Math.min(Math.max((used / limit) * 100, 0), 100) : 0);

  if (!data) return null;

  const VARS = {
    fontFamily: 'var(--bc-font-family, -apple-system, sans-serif)',
    baseFontSize: 'var(--bc-font-size-base, 14px)',
    titleFontSize: 'var(--bc-font-size-title, 16px)',

    bg: 'var(--bc-bg, #FFFFFF)',
    text: 'var(--bc-text, #333333)',
    subText: 'var(--bc-text-sub, #8C8C8C)',
    primary: 'var(--bc-primary, #2EC4B6)',
    danger: 'var(--bc-danger, #FF4D4F)',
    barBg: 'var(--bc-bar-bg, #F5F5F5)',
    border: 'var(--bc-border, #F0F0F0)',

    radius: 'var(--bc-radius, 20px)',
    shadow: 'var(--bc-shadow, 0 4px 12px rgba(0,0,0,0.05))',
  };

  return (
    <div style={{ fontFamily: VARS.fontFamily, color: VARS.text }}>
      <div
        onClick={() => setIsOpen(true)}
        style={{
          backgroundColor: VARS.bg,
          border: `1px solid ${VARS.border}`,
          borderRadius: VARS.radius,
          padding: '20px',
          cursor: 'pointer',
          width: '100%',
          maxWidth: '350px',
          boxShadow: VARS.shadow,
          transition: 'transform 0.2s'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
          <span style={{ fontWeight: '800', fontSize: VARS.titleFontSize }}>{data.title}</span>
          <span style={{
            color: VARS.danger, fontSize: '12px', fontWeight: 'bold',
            backgroundColor: 'color-mix(in srgb, var(--bc-danger, #FF4D4F) 10%, transparent)',
            padding: '4px 8px', borderRadius: '6px'
          }}>
            {calculateDDay(data.resetDate)}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: VARS.baseFontSize, marginBottom: '8px' }}>
          <span style={{ color: VARS.subText }}>총 받은 혜택</span>
          <span>
            <strong style={{ color: VARS.primary }}>{totalUsed.toLocaleString()}</strong>
            <span style={{ color: '#BFBFBF' }}> / {totalLimit.toLocaleString()}원</span>
          </span>
        </div>

        <div style={{ height: '8px', backgroundColor: VARS.barBg, borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{
            width: `${getPercent(totalUsed, totalLimit)}%`,
            height: '100%', backgroundColor: VARS.primary,
            transition: 'width 0.5s ease-in-out'
          }} />
        </div>
      </div>

      {/* --- 모달 상세 --- */}
      {isOpen && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999, backdropFilter: 'blur(4px)'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              backgroundColor: VARS.bg, width: '90%', maxWidth: '340px', borderRadius: VARS.radius,
              padding: '24px', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '20px' }}>혜택 상세 현황</h3>
              <p style={{ fontSize: '12px', color: VARS.subText, margin: 0 }}>
                {calculateDDay(data.resetDate)} ({data.resetDate})
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {data.benefits?.map((item) => {
                const remaining = item.limit - item.used;
                const percent = getPercent(item.used, item.limit);

                return (
                  <div key={item.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
                      <span style={{ fontSize: VARS.baseFontSize }}>{item.icon} {item.type}</span>
                      <span style={{ fontSize: '13px', fontWeight: 'bold', color: remaining > 0 ? VARS.text : VARS.danger }}>
                        {remaining > 0 ? `${remaining.toLocaleString()}원 남음` : '한도 초과'}
                      </span>
                    </div>

                    <div style={{ height: '10px', backgroundColor: VARS.barBg, borderRadius: '5px', overflow: 'hidden', marginBottom: '6px' }}>
                      <div style={{
                        width: `${percent}%`,
                        height: '100%',
                        backgroundColor: percent >= 100 ? VARS.danger : VARS.primary,
                        borderRadius: '5px',
                        transition: 'width 0.8s'
                      }} />
                    </div>

                    <div style={{ fontSize: '12px', color: VARS.subText, textAlign: 'right' }}>
                      {item.used.toLocaleString()} / {item.limit.toLocaleString()}원
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: '100%', padding: '16px', border: 'none', borderRadius: '12px',
                backgroundColor: VARS.barBg, color: VARS.text, fontWeight: 'bold',
                cursor: 'pointer', marginTop: '24px', fontSize: VARS.baseFontSize
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}