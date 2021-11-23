import { FormElement, FormFieldset, FormLegend, FormParagraph, FormSpan, FormInput, FormButton } from "./styled"
import Result from "../Result"
import Clock from "../Clock"
import { useState } from "react"
import { currencies } from "../currencies"

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].summary)

    const onFormSubmit = (event) => {
        event.preventDefault()
        calculateResult(amount, currency)
    };

    return (
        <FormElement onSubmit={onFormSubmit}>
            <FormFieldset>
                <>
                    <FormLegend>Kalkulator Walut</FormLegend>
                    <Clock />
                </>
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
                            {currencies.map((currency => (
                                <option
                                    key={currency.summary}
                                    value={currency.summary}
                                >
                                    {currency.name}
                                </option>
                            )))};
                        </FormInput>
                    </label>
                </FormParagraph>
                <FormButton>
                    Przelicz
                </FormButton>
                <Result result={result} />
            </FormFieldset>
        </FormElement>
    )
};

export default Form;