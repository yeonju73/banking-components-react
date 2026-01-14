import AccountPasteSection from './components/account/AccountPasteSection';
import BankItemList from './components/account/BankItemList'
import { banks } from './data/banks';
import { useState } from 'react';
import AccountNumberField from './components/account/AccountNumberField';
import BankOptionField from './components/account/BankOptionField';


const App = () => {

  const [accountNumber, setAccountNumber] = useState('');
  const [accountBank, setAccountBank] = useState('');

  return (
    <div>
      <div className="w-full p-2">
          <AccountNumberField  accountNumber={accountNumber} setAccountNumber={setAccountNumber}/>
          <BankOptionField accountBank={accountBank} setAccountBank={setAccountBank} bankList={banks}/>
          <BankItemList banks={banks} />
          <AccountPasteSection setAccountNumber={setAccountNumber} setAccountBank={setAccountBank}/>
      </div>
    </div>
  )
}

export default App
