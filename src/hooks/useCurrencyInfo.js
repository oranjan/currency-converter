import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState(null);
  async function getCurrencyRates(currency) {
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?base=${currency}`
      );
      if (!res.ok) throw new Error("unable to fetch");
      const info = await res.json();
      setData(info.rates);
    } catch (err) {
      console.error("Fetch failed:", err.message);
    }
  }

  useEffect(() => {
    if (!currency) return;
    getCurrencyRates(currency);
  }, [currency]);
  return data || [];
};

export default useCurrencyInfo;
