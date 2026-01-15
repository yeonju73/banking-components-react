import AccountForm from "./components/AccountForm";
import { useAccountFormState } from "./hooks/useAccountFormState";
import { banks } from "./data/banks";

const App = () => {
  const myAccount = useAccountFormState();
  const myclasses = 'h-full'

  return (
    <>
      <AccountForm accountState={myAccount} banks={banks} className={myclasses}/>
      <button onClick={() => {
        console.log("최종 번호:", myAccount.accountNumber);
        console.log("최종 은행:", myAccount.accountBank);
      }}>확인</button>
    </>
  )
}

export default App
