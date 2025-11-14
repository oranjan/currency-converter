import React, { useId } from "react";

export default function InputBox({
  state,
  setState,
  currencyTypes,
  label,
  amount,
  setAmount,
}) {
  const id = useId();

  return (
    <div className="w-full p-5 rounded-2xl bg-[#1A1A1E] text-white border border-[#2C2C32] shadow-[0_0_25px_rgba(0,0,0,0.4)] flex items-center gap-6">
      <div className="flex flex-col flex-1 gap-2">
        <label className="text-xs uppercase tracking-wide text-white/60">
          {label}
        </label>

        <input
          min={0}
          step="0.01"
          type="number"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            const cleaned = value.replace(/^0+(?=\d)/, "");
            setAmount(cleaned);
          }}
          placeholder="0.00"
          autoComplete="off"
          autoFocus={label === "from"}
          className="px-4 py-2 rounded-xl border border-[#2C2C32] bg-[#0E0E11] text-white placeholder-white/40 
          focus:outline-none focus:ring-2 focus:ring-[#5A5AF5]"
        />
      </div>

      <div className="flex flex-col w-36 gap-2">
        <label className="text-xs uppercase tracking-wide text-white/60">
          Currency
        </label>

        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          id={id}
          className="px-3 py-2 rounded-xl border border-[#2C2C32] bg-[#0E0E11] text-white cursor-pointer 
          focus:outline-none focus:ring-2 focus:ring-[#5A5AF5]"
        >
          <option key={state} value={state} className="text-black bg-white">
            {state}
          </option>

          {currencyTypes?.map((c) => (
            <option key={c} value={c} className="text-black bg-white">
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
