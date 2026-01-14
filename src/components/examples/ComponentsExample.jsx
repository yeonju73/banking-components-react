import { useState } from "react";
import AccountNumberField from "../account/AccountNumberField";
import BankOptionField from "../account/BankOptionField";
import { banks } from "../../data/banks";

const bankList = banks

const ComponentsExample = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [accountBank, setAccountBank] = useState('');

    return (
        <>
            <div className="w-full p-2">
                <AccountNumberField  accountNumber={accountNumber} setAccountNumber={setAccountNumber} className='justify-self-center' />
                <BankOptionField accountBank={accountBank} setAccountBank={setAccountBank} bankList={bankList} className='justify-self-center'/>
            </div>
        </>
    )
}

export default ComponentsExample;