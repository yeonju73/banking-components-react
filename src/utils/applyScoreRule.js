export const applyScoreRule = (rule, account) => {
  switch (rule.type) {

    case 'length': {
      if (Array.isArray(rule.value)) {
        return rule.value.includes(account.length) ? rule.score : 0;
      }
      return account.length === rule.value ? rule.score : 0;
    }

    case 'prefix': {
      const prefixes = rule.match || [];

      if (rule.position === 'start-3') {
        return prefixes.some(p => account.startsWith(p))
          ? rule.score
          : 0;
      }

      if (rule.position === 'start-2-or-3') {
        return prefixes.some(p =>
          account.startsWith(p) ||
          account.startsWith(p.slice(0, 2))
        )
          ? rule.score
          : 0;
      }

      return 0;
    }

    case 'firstDigit': {
      return rule.match.includes(account[0])
        ? rule.score
        : 0;
    }

    case 'virtualAccountHint': {
      return account.length === rule.length
        ? rule.score
        : 0;
    }

    default:
      return 0;
  }
};
