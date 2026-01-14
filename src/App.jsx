import AccountPasteSection from './components/acount/AccountPasteSection';
import BankItemList from './components/acount/BankItemList'
import { banks } from './data/banks';

const copiedAccount = '123-****-5678'

const App = () => {
  return (
    <div>
      <BankItemList banks = {banks}/>
      <AccountPasteSection bank={banks[2]} account={copiedAccount}/>
    </div>
  )
}

export default App
