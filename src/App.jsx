import { useEffect, useState } from 'react';
import AccountPasteSection from './components/account/AccountPasteSection';
import BankItemList from './components/account/BankItemList'
import { banks } from './data/banks';
import { parseClipboardText } from './utils/parseClipboardText';
import ComponentsExample from './components/examples/ComponentsExample';
import DefaultLayout from './layouts/DefaultLayout';
import ConfirmButton from './components/account/ConfirmButton';


const App = () => {
  const [clipboardAccount, setClipboardAccount] = useState(null);

  useEffect(() => {
    const checkClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText();
        console.log(text);

        const parsed = parseClipboardText(text, banks);
        if (parsed) {
          setClipboardAccount(parsed);
        }

      } catch (e) {
        // 권한 거부 or 접근 불가
        console.log('Clipboard access failed');

      }
    };
    checkClipboard();

  }, []); // 컴포넌트가 처음 화면에 나타날 때 딱 한 번만 실행

  return (
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
