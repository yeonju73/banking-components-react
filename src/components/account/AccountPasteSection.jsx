import AccountPasteItem from './AccountPasteItem';

const AccountPasteSection = ({data}) => {

  return (
    <section className="mt-6">
      <h3 className="mb-2 text-sm font-semibold text-gray-700">
        복사한 계좌로 송금
      </h3>

      <AccountPasteItem
        bank={data.bank}
        account={data.account}
      />
    </section>
  );
};

export default AccountPasteSection;
