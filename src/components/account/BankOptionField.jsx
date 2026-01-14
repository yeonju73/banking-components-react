import { useState } from "react";

const BankOptionField = ({ className, accountBank, setAccountBank, bankList }) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={`relative w-full max-w-xl m-3 block ${className}`}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between w-full p-3 border border-black ${isOpen ? 'rounded-t-sm' : 'rounded-sm'} bg-white text-left`}
            >
                <span className={accountBank === "" ? "text-gray-400" : "text-black"}>
                    {accountBank ? bankList.find(bank => bank.id === accountBank)?.label : "은행"}
                </span>
                <span className={`transition-transform duration-300 inline-block ${isOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
        

            
            <ul className={`absolute z-10 w-full border-t-0 bg-white border border-black rounded-b-sm shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 visible' : 'max-h-0 opacity-0 invisible pointer-events-none'}`}>
                {
                    bankList.map((bank) => (
                        <li
                            key={bank.id}
                            onClick={() => {
                                setAccountBank(bank.id);
                                setIsOpen(false);
                            }}
                            className="p-3 hover:bg-gray-100 cursor-pointer text-black border-b last:border-b-0"
                        >
                            {bank.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BankOptionField;