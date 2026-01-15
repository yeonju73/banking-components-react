import { useEffect, useState } from 'react';
import AccountPasteItem from './AccountPasteItem';
import { parseClipboardText } from '../../utils/parseClipboardText';
import { banks } from '../../data/banks';

const AccountPasteSection = ({ setAccountNumber, setAccountBank, className }) => {
  const [clipboardAccount, setClipboardAccount] = useState(null);

  useEffect(() => {
    const checkClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText();  

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
    window.addEventListener('focus', checkClipboard);
  }, []); // 컴포넌트가 처음 화면에 나타날 때 딱 한 번만 실행

  const onClick = () => {
    if(!clipboardAccount) {
      return;
    } else if('bank' in clipboardAccount) {
      setAccountNumber(clipboardAccount.account);
      setAccountBank(clipboardAccount.bank.id);
    } else {
      setAccountNumber(clipboardAccount.account);
    }
  }

  return (
      clipboardAccount != null && (
        <section className={`justify-self-center mt-6 w-full max-w-xl ${className}`}>
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            복사한 계좌로 송금
          </h3>

          <AccountPasteItem
            bank={clipboardAccount.bank}
            account={clipboardAccount.account}
            onClick={onClick}
          />
        </section>
      )
  );
};

export default AccountPasteSection;
