import AccountPasteSection from './components/account/AccountPasteSection';
import BankItemList from './components/account/BankItemList'
import { banks } from './data/banks';
import { useState } from 'react';
import AccountNumberField from './components/account/AccountNumberField';
import BankOptionField from './components/account/BankOptionField';
import DefaultLayout from './layouts/DefaultLayout';
import ConfirmButton from './components/account/ConfirmButton';


const App = () => {

  const [accountNumber, setAccountNumber] = useState('');
  const [accountBank, setAccountBank] = useState('');

  return (
    <DefaultLayout>
      <AccountNumberField  accountNumber={accountNumber} setAccountNumber={setAccountNumber}/>
      <BankOptionField accountBank={accountBank} setAccountBank={setAccountBank} bankList={banks}/>
      <BankItemList banks={banks} setAccountBank={setAccountBank} />
      <AccountPasteSection setAccountNumber={setAccountNumber} setAccountBank={setAccountBank}/>
      <ConfirmButton enabled={true} />      
    </DefaultLayout>
  )
}

export default App
