import { FormElement, FormFieldset, FormLegend, FormParagraph, FormSpan, FormInput, FormButton } from "./styled";
import Result from "../Result";
import Clock from "../Clock";
import { useState } from "react";
import { useCurrencies } from "../useCurrencies";

const Form = () => {
    const currencyData = useCurrencies();
    const [result, setResult] = useState();
    const calculateResult = (amount, currency) => {
        const rate = currencyData.rates[currency];

        setResult({
            afterConversion: +amount * rate,
            currency,
        });
    };
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD");

    const onFormSubmit = (event) => {
        event.preventDefault()
        calculateResult(amount, currency)
    };

    return (
        <FormElement onSubmit={onFormSubmit}>

            <FormFieldset>
                <FormLegend>
                    Kalkulator Walut
                </FormLegend>
                <Clock />
                {currencyData.state === "loading"
                    ? (
                        <p>Moment, ładujemy obecne kursy :)</p>
                    )
                    : (currencyData.state === "error"
                        ? (
                            <p>Ups.. coś poszło nie tak, spróbuj ponownie!</p>
                        )
                        : (<>
                            <FormParagraph>
                                <label>
                                    <FormSpan>
                                        Podaj kwotę w PLN*:
                                    </FormSpan>
                                    <FormInput
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        type="number"
                                        min="1"
                                        step="1"
                                        required
                                        placeholder="Podaj kwotę" />
                                </label>
                            </FormParagraph>
                            <FormParagraph>
                                <label>
                                    <FormSpan>
                                        Wymieniam na:
                                    </FormSpan>
                                    <FormInput
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {!!currencyData.rates && Object.keys(currencyData.rates).map((currency => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </FormInput>
                                </label>
                            </FormParagraph>
                        </>
                        ))
                };
                <FormButton>
                    Przelicz
                </FormButton>
                <Result result={result} />
            </FormFieldset>

        </FormElement>
    );
};
export default Form;