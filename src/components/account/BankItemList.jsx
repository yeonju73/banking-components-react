import BankItem from './BankItem';

const BankItemList = ({ banks, className }) => {
    const bankList = banks.map((x) => 
        <BankItem key={x.id} label={x.label} code={x.code} color={x.color} />
    )
  return (
    <div className={`flex gap-2 mt-3 justify-self-center max-w-xl ${className}`}>
      {bankList}
    </div>
  );
}

export default BankItemList