import React from 'react';
import CardItem from './CardItem';

const CardPage = ({ cards, onCardClick }) => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '100vh' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>
                보유 카드 <span style={{ color: '#4CD9C0' }}>{cards.length}</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cards.map((card) => (
                    <CardItem key={card.id} card={card} onClick={onCardClick} />
                ))}
            </div>
        </div>
    );
};

export default CardPage;