import BankItemList from './components/acount/BankItemList'
import { banks } from './data/banks';

const App = () => {
  return (
    <div>
      <BankItemList banks = {banks}/>
    </div>
  )
}

export default App
