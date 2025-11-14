import { useState } from "react";
import InputBox from "./components/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [from, setFrom] = useState("USD");
  const [to, SetTo] = useState("INR");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyData = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyData);

  const currencyConverter = (e) => {
    e.preventDefault();
    setConvertedAmount((amount * currencyData[to]).toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    SetTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="min-h-screen  text-black flex items-center justify-center p-6
    bg-[#0B0C0F] bg-gradient-to-br from-[#0B0C0F] to-[#0F1E26]
    "
    >
      <form
        onSubmit={currencyConverter}
        className="w-full max-w-2xl space-y-3 "
      >
        <InputBox
          state={from}
          setState={setFrom}
          currencyTypes={currencyOptions}
          label={"from"}
          setAmount={setAmount}
          amount={amount}
        />
        <button
          type="button"
          onClick={swap}
          className="py-2 w-full px-4 bg-white text-black font-semibold rounded-xl 
             hover:bg-white/80 active:scale-95 transition-all"
        >
          Swap ⇆
        </button>

        <InputBox
          state={to}
          setState={SetTo}
          currencyTypes={currencyOptions}
          label={"to"}
          amount={convertedAmount}
        />
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-white text-black font-semibold rounded-xl 
             hover:bg-white/80 active:scale-95 transition-all"
        >
          Convert
        </button>
      </form>
    </div>
  );
};

export default App;
