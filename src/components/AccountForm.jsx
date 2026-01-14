import AccountNumberField from "./account/AccountNumberField";
import DefaultLayout from "../layouts/DefaultLayout";
import BankOptionField from "./account/BankOptionField";
import BankItemList from "./account/BankItemList";
import AccountPasteSection from "./account/AccountPasteSection";
import { useBankRecommendation } from "../hooks/useBankRecommendation";

const AccountForm = ({ accountState, banks, className }) => {
    const { 
        accountNumber, setAccountNumber, 
        accountBank, setAccountBank, 
        numericAccountNumber 
    } = accountState;

    const recommendedBanks = useBankRecommendation(numericAccountNumber, banks);

    return (
        <DefaultLayout className={`${className}`}>
            <AccountNumberField  accountNumber={accountNumber} setAccountNumber={setAccountNumber}/>
            <BankOptionField accountBank={accountBank} setAccountBank={setAccountBank} bankList={banks}/>
            {recommendedBanks.length > 0 && (
                <BankItemList banks={recommendedBanks} setAccountBank={setAccountBank} />
            )}
            <AccountPasteSection setAccountNumber={setAccountNumber} setAccountBank={setAccountBank}/>
        </DefaultLayout>
    )
}

export default AccountForm