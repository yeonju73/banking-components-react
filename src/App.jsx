import AccountPasteSection from './components/account/AccountPasteSection';
import BankItemList from './components/account/BankItemList'
import { banks } from './data/banks';
import { useState } from 'react';
import AccountNumberField from './components/account/AccountNumberField';
import BankOptionField from './components/account/BankOptionField';
import { parseClipboardText } from './utils/parseClipboardText';
import ComponentsExample from './components/examples/ComponentsExample';
import DefaultLayout from './layouts/DefaultLayout';
import ConfirmButton from './components/account/ConfirmButton';


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
    <DefaultLayout>
      <ComponentsExample bankList = {banks}/>
      <BankItemList banks={banks} />
      {clipboardAccount && (
        <AccountPasteSection data={clipboardAccount} />
      )}
      <ConfirmButton enabled={true} />
    </DefaultLayout>
  )
}

export default App
