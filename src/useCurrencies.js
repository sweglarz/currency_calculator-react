import { useState, useEffect } from "react";
import axios from 'axios';

export const useCurrencies = () => {
    const [currencyData, setCurrencyData] = useState({ state: "loading" });

    useEffect(() => {
        const getRates = async () => {
            try {
                const myRates = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const { rates, date } = await myRates.data;

                setCurrencyData({
                    state: "loaded",
                    rates,
                    date
                });
            }
            catch {
                setCurrencyData({
                    state: "error"
                });
            };
        };
        setTimeout(getRates, 2000);
    }, []);
 
    return currencyData;
};