
const Section = (props) => (
    <>
    <p className="form__paragraph">
            <label className="form__label">
                <span className="form__labelText">
                    Podaj kwotę w PLN*:
                </span>
                <input className="form__field" type="number" min="1" step="1" required
                    placeholder="Podaj kwotę"/>
            </label>
        </p>
        <p className="form__paragraph">
            <label className="form__label">
                <span className="form__labelText">
                    Wymieniam na:
                </span>
                <select className="form__field" name="currency">
                    <option value="EUR">Euro</option>
                    <option value="USD">Dolar Amerykański</option>
                    <option value="GBP">Funt Szterling</option>
                </select>
            </label>
        </p>
    </>
)

export default Section