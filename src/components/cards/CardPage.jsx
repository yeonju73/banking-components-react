import React from 'react';
import CardItem from './CardItem';

const CardPage = ({ cards, onCardClick }) => {
    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            {/* 기준 년월 헤더 */}
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
                2026년 1월 <span style={{ color: '#4CD9C0' }}>혜택 현황</span>
            </h2>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '30px' }}>
                이번 달 받은 혜택을 확인해보세요.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {cards.map((card) => (
                    <CardItem key={card.id} card={card} onClick={onCardClick} />
                ))}
            </div>
        </div>
    );
};

export default CardPage;