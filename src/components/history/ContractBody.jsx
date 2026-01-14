import React from 'react';

const ContractBody = ({ transactions }) => {
    return (
        <div style={{ backgroundColor: '#fff', padding: '0 20px 40px', minHeight: '500px' }}>

            {/* 상단 구분선 */}
            <div style={{ height: '10px', backgroundColor: '#F5F6F8', margin: '0 -20px 20px' }}></div>

            {/* 거래 내역 리스트 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {transactions.map((t) => {
                    // 1. 날짜 포맷팅
                    const dateObj = new Date(t.date);
                    const formattedDate = `${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;

                    // 2. [추가된 로직] 입출금 타입 체크
                    const isDeposit = t.type === 'deposit';
                    const typeText = isDeposit ? '입금' : '출금';
                    const typeColor = isDeposit ? '#F04452' : '#4a90e2'; // 입금: 빨강, 출금: 파랑
                    const amountPrefix = isDeposit ? '+' : ''; // 입금일 때 앞에 + 붙이기

                    return (
                        <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

                            {/* 왼쪽: 날짜, 카드명, 사용처 */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ fontSize: '12px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span>{formattedDate}</span>
                                    <div style={{ width: '1px', height: '10px', background: '#e0e0e0' }}></div>
                                    <span>{t.cardName}</span>
                                </div>
                                <span style={{ fontSize: '16px', fontWeight: '500', color: '#333' }}>
                                    {t.description}
                                </span>
                            </div>

                            {/* 오른쪽: 금액 및 입출금 구분 */}
                            <div style={{ textAlign: 'right' }}>
                                {/* 입출금 텍스트 색상 동적 적용 */}
                                <span style={{ display: 'block', fontSize: '11px', color: typeColor, marginBottom: '3px' }}>
                                    {typeText}
                                </span>
                                <span style={{ fontSize: '17px', fontWeight: 'bold', color: '#333' }}>
                                    {amountPrefix}{t.amount.toLocaleString()}원
                                </span>
                            </div>
                        </div>
                    );
                })}

                {transactions.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#aaa' }}>
                        거래 내역이 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContractBody;