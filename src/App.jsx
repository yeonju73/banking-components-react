import AccountPasteSection from './components/account/AccountPasteSection';
import BankItemList from './components/account/BankItemList'
import { banks } from './data/banks';
import { useEffect, useState } from 'react';
import AccountNumberField from './components/account/AccountNumberField';
import BankOptionField from './components/account/BankOptionField';
import DefaultLayout from './layouts/DefaultLayout';
import ConfirmButton from './components/account/ConfirmButton';
import { calculateBankScores } from './utils/calculateBankScores';


const App = () => {

  const [accountNumber, setAccountNumber] = useState('');
  const [accountBank, setAccountBank] = useState('');

  const [recommendedBanks, setRecommendedBanks] = useState([]);

  useEffect(() => {
    // 하이픈 제거한 순수 숫자 길이 기준
    const numericLength = accountNumber.replace(/-/g, '').length;

    // 10자리 미만이면 추천 안 함
    if (numericLength < 10) {
      setRecommendedBanks([]);
      return;
    }

    // 점수 계산
    const scoredBanks = calculateBankScores(accountNumber, banks);

    // 상위 3개만
    setRecommendedBanks(scoredBanks.slice(0, 3));
  }, [accountNumber]);
  

  return (
    <DefaultLayout>
      <AccountNumberField  accountNumber={accountNumber} setAccountNumber={setAccountNumber}/>
      <BankOptionField accountBank={accountBank} setAccountBank={setAccountBank} bankList={banks}/>
      {recommendedBanks.length > 0 && (
        <BankItemList banks={recommendedBanks} setAccountBank={setAccountBank} />
      )}
      <AccountPasteSection setAccountNumber={setAccountNumber} setAccountBank={setAccountBank}/>
      <ConfirmButton enabled={true} />
    </DefaultLayout>
  )
}

export default App
