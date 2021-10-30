import "./style.css"
import Button from "../Button"
import Result from "../Result"
import Introduction from "../Introduction"
import { useState } from "react"
import { currencies } from "../currencies"

const Form = ({ calculateResult, result }) => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].summary)

    const onFormSubmit = (event) => {
        event.preventDefault()
        calculateResult(amount, currency)
    }
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <Introduction />
                <p className="form__paragraph">
                    <label className="form__label">
                        <span className="form__labelText">
                            Podaj kwotę w PLN*:
                        </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__field"
                            type="number"
                            min="1"
                            step="1"
                            required
                            placeholder="Podaj kwotę" />
                    </label>
                </p>
                <p className="form__paragraph">
                    <label className="form__label">
                        <span className="form__labelText">
                            Wymieniam na:
                        </span>
                        <select className="form__field"
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
                        </select>
                    </label>
                </p>
                <Button />
                <Result result={result} />
            </fieldset>
        </form>
    )
}
export default Form;