import {
    FormElement,
    FormFieldset,
    FormLegend,
    FormParagraph,
    FormSpan,
    FormInput,
    FormButton,
    LoadingSpinner,
    LoadingText,
    StyledInformationText,
    ErrorText,
    ErrorImage
} from "./styled";
import Result from "../Result";
import Clock from "../Clock";
import { useState } from "react";
import { useCurrencies } from "../useCurrencies";
import errorImage from "../Images/problem-solved.png";

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
                        <>
                            <LoadingText>Daj nam chwilę, poberamy dla Ciebie najświeższe kursy walut &#128521; </LoadingText>
                            <LoadingSpinner></LoadingSpinner>
                        </>

                    )
                    : (currencyData.state === "error"
                        ? (
                            <>
                                <ErrorText>Ups... Coś poszło nie tak, spróbuj ponownie później!</ErrorText>
                                <ErrorImage src={errorImage} alt="Error" />
                           </>
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
                }
                <FormButton>
                    Przelicz
                </FormButton>
                <Result result={result} />
                <StyledInformationText>Kursy walut pobierane są z Europejskiego Banku Centralnego.</StyledInformationText>
                <StyledInformationText>Aktualne na dzień: <strong>{currencyData.date}</strong></StyledInformationText>
            </FormFieldset>
        </FormElement>
    );
};
export default Form;