export const parseClipboardText = (text, banks) => {
    if (!text) return null;
    
    // 숫자 위주 계좌 추출 (공백, 하이픈 허용)
    const accountMatch = text.match(/[\d-]{8,}/);
    if (!accountMatch) return null;

    const account = accountMatch[0];

    // 은행명 포함 여부 확인
    const bank = banks.find((b) =>
      text.includes(b.label) || text.includes(b.code)
    );

    if (bank) {
      return { account, bank };
    }

    return { account };
  };
