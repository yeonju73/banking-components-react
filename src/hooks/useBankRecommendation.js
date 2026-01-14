import { useEffect, useState } from "react";
import { calculateBankScores } from "../utils/calculateBankScores";

export const useBankRecommendation = (numericAccountNumber, banks) => {
    const [recommendedBanks, setRecommendedBanks] = useState([]);

    useEffect(() => {
        if (numericAccountNumber.length < 10) {
            setRecommendedBanks([]);
            return;
        }

        const scoredBanks = calculateBankScores(numericAccountNumber, banks);
        setRecommendedBanks(scoredBanks.slice(0, 3));
    }, [numericAccountNumber, banks]);

    return recommendedBanks;
};