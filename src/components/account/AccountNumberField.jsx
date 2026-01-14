const accountRegex = /^[0-9-]*$/;

const AccountNumberField = ({ accountNumber, setAccountNumber, className }) => {

    const changeHandler = (event) => {
        const newValue = event.target.value;

        if(newValue == '') {
            setAccountNumber('');
            return;
        }

        if(newValue.startsWith('-')) {
            alert('계좌번호는 숫자로 시작해야 합니다.')
            return;
        }

        if(accountRegex.test(newValue)) {
            setAccountNumber(newValue);
        } else {
            alert('계좌번호는 숫자와 -로만 입력 가능합니다.');
        }
    }
    // autocomplete="one-time-code"를 사용하면 모바일에서 문자로 온 거 입력 창이 뜬다.

    return (
        <>
            <input type="text" inputMode="tel" placeholder='계좌번호' value={accountNumber} onChange={changeHandler} className={`rounded-sm border border-black w-full max-w-xl p-3 my-3 block ${className}`}></input>
        </>
    )
}

export default AccountNumberField;