import { applyScoreRule } from './applyScoreRule';

export const calculateBankScores = (accountNumber, banks) => {
  // 하이픈 제거
  const normalized = accountNumber.replace(/-/g, '');

  return banks.map((bank) => {
      let score = 0;

      bank.scoreRules.forEach((rule) => {
        score += applyScoreRule(rule, normalized);
      });

      return {
        ...bank,
        score,
      };
    })
    .filter((bank) => bank.score > 0) // 점수 없는 은행 제거
    .sort((a, b) => b.score - a.score); // 점수 높은 순
};
