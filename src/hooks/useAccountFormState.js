import { useState } from "react";

export const useAccountFormState = () => {
    const [accountNumber, setAccountNumber] = useState("");
    const [accountBank, setAccountBank] = useState("");

    const numericAccountNumber = accountNumber.replace(/-/g, '');

    return {
        accountNumber,
        setAccountNumber,
        accountBank,
        setAccountBank,
        numericAccountNumber
    };
};